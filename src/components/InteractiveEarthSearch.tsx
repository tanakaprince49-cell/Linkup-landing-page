import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { resolveLocation } from '../lib/cityCoords';
import type { PublicBuilder } from '../lib/publicBuilders';
import './InteractiveEarthSearch.css';

type PlaceGroup = {
  key: string;
  label: string;
  precision: string;
  lat: number;
  lng: number;
  members: PublicBuilder[];
};

type Props = { members: PublicBuilder[] };

function getLocation(location: string) {
  const parts = location.split(/[·,]/).map(part => part.trim()).filter(Boolean);
  const country = parts.length > 1 ? parts.at(-1) || '' : '';
  const city = parts.length > 1 ? parts.slice(0, -1).join(' ') : '';
  const place = resolveLocation(city, country) || resolveLocation('', parts.at(-1) || '') || resolveLocation(parts[0] || '', '');
  if (!place) return null;
  const resolvedCountry = place.precision === 'country' ? place.label : country;
  const label = place.precision === 'city' && resolvedCountry
    ? `${place.label}, ${resolvedCountry}`
    : place.label;
  return { ...place, country: resolvedCountry, label };
}

function vectorFor(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * Math.PI / 180;
  const theta = (lng + 180) * Math.PI / 180;
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

export const InteractiveEarthSearch: React.FC<Props> = ({ members }) => {
  const hostRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<PlaceGroup | null>(null);
  const [webglUnsupported, setWebglUnsupported] = useState(false);
  const groups = useMemo(() => {
    const byPlace = new Map<string, PlaceGroup>();
    for (const member of members) {
      const place = getLocation(member.location);
      if (!place) continue;
      const key = `${place.precision}:${place.label}`;
      const current = byPlace.get(key) || { key, label: place.label, precision: place.precision, lat: place.lat, lng: place.lng, members: [] };
      current.members.push(member);
      byPlace.set(key, current);
    }
    return [...byPlace.values()].sort((a, b) => b.members.length - a.members.length);
  }, [members]);

  useEffect(() => {
    if (!selected) return;
    setSelected(groups.find(group => group.key === selected.key) || null);
  }, [groups, selected?.key]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch {
      setWebglUnsupported(true);
      return;
    }

    const radius = 1.72;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0.55, 5.15);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.setAttribute('aria-hidden', 'true');
    host.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.055;
    controls.enablePan = false;
    controls.minDistance = 2.55;
    controls.maxDistance = 7.25;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.3;
    controls.addEventListener('start', () => { controls.autoRotate = false; });

    scene.add(new THREE.AmbientLight(0x9dbbe0, 1.05));
    const sun = new THREE.DirectionalLight(0xffffff, 2.25);
    sun.position.set(-4, 3, 5);
    scene.add(sun);
    const rimLight = new THREE.DirectionalLight(0x16b8e9, 1.25);
    rimLight.position.set(4, -1.5, -4);
    scene.add(rimLight);

    const earthGroup = new THREE.Group();
    earthGroup.rotation.y = Math.PI / 3;
    scene.add(earthGroup);
    const earthGeometry = new THREE.SphereGeometry(radius, 96, 64);
    const earthMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      specular: new THREE.Color(0x254a68),
      shininess: 9,
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earthGroup.add(earth);
    // Locally served NASA Blue Marble equirectangular map; never hotlink a tile CDN.
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('/images/earth-blue-marble.jpg', texture => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);
      earthMaterial.map = texture;
      earthMaterial.needsUpdate = true;
    }, undefined, () => {
      host.dataset.textureFallback = 'true';
    });

    // Thin blue atmosphere around the real surface texture.
    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(radius * 1.035, 64, 48),
      new THREE.MeshBasicMaterial({ color: 0x35bdf0, transparent: true, opacity: 0.075, side: THREE.BackSide, depthWrite: false }),
    );
    earthGroup.add(atmosphere);

    // A quiet star field gives the globe depth without competing with the map.
    const starPositions = new Float32Array(950 * 3);
    for (let i = 0; i < 950; i += 1) {
      const r = 16 + Math.random() * 16;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.cos(phi);
      starPositions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    const starsGeometry = new THREE.BufferGeometry();
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const stars = new THREE.Points(starsGeometry, new THREE.PointsMaterial({ color: 0xc8ddf2, size: 0.04, transparent: true, opacity: 0.68 }));
    scene.add(stars);

    // Face sprites are distributed round-robin so a single large city cannot hide every other location.
    const maxFaceMarkers = 240;
    const faceEntries: Array<{ group: PlaceGroup; groupIndex: number; member: PublicBuilder; memberIndex: number }> = [];
    for (let depth = 0; faceEntries.length < maxFaceMarkers; depth += 1) {
      let foundAtDepth = false;
      groups.forEach((group, groupIndex) => {
        const member = group.members[depth];
        if (member && faceEntries.length < maxFaceMarkers) {
          faceEntries.push({ group, groupIndex, member, memberIndex: depth });
          foundAtDepth = true;
        }
      });
      if (!foundAtDepth) break;
    }
    const faceSprites: THREE.Sprite[] = [];
    const faceMaterials: THREE.SpriteMaterial[] = [];
    const initialsTexture = (name: string) => {
      const canvas = document.createElement('canvas');
      canvas.width = 96;
      canvas.height = 96;
      const context = canvas.getContext('2d');
      if (!context) return null;
      context.fillStyle = '#10283d';
      context.beginPath();
      context.arc(48, 48, 46, 0, Math.PI * 2);
      context.fill();
      context.strokeStyle = '#7ee7ff';
      context.lineWidth = 5;
      context.stroke();
      context.fillStyle = '#fbe63f';
      context.font = '800 34px ui-sans-serif, sans-serif';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(name.split(/\\s+/).slice(0, 2).map(part => part[0] || '').join('').toUpperCase(), 48, 50);
      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      return texture;
    };
    const avatarTextureLoader = new THREE.TextureLoader();
    avatarTextureLoader.setCrossOrigin('anonymous');
    faceEntries.forEach(({ group, groupIndex, member, memberIndex }) => {
      const material = new THREE.SpriteMaterial({
        map: initialsTexture(member.name),
        color: 0xffffff,
        transparent: true,
        depthTest: true,
        depthWrite: false,
        sizeAttenuation: true,
      });
      const sprite = new THREE.Sprite(material);
      const angle = memberIndex * 2.399;
      const spread = Math.min(memberIndex, 10) * 0.032;
      const position = vectorFor(group.lat, group.lng, radius + 0.075);
      position.x += Math.cos(angle) * spread;
      position.y += Math.sin(angle) * spread;
      sprite.position.copy(position.normalize().multiplyScalar(radius + 0.075));
      sprite.scale.set(0.13, 0.13, 1);
      sprite.userData.placeKey = group.key;
      sprite.userData.groupIndex = groupIndex;
      sprite.userData.memberName = member.name;
      sprite.userData.memberUid = member.uid;
      earthGroup.add(sprite);
      faceSprites.push(sprite);
      faceMaterials.push(material);

      if (member.image) {
        avatarTextureLoader.load(member.image, sourceTexture => {
          const source = sourceTexture.image as CanvasImageSource;
          const canvas = document.createElement('canvas');
          canvas.width = 96;
          canvas.height = 96;
          const context = canvas.getContext('2d');
          if (context) {
            const imageWidth = (source as HTMLImageElement).naturalWidth || (source as HTMLVideoElement).videoWidth || 1;
            const imageHeight = (source as HTMLImageElement).naturalHeight || (source as HTMLVideoElement).videoHeight || 1;
            const crop = Math.min(imageWidth, imageHeight);
            context.save();
            context.beginPath();
            context.arc(48, 48, 46, 0, Math.PI * 2);
            context.clip();
            context.drawImage(source, (imageWidth - crop) / 2, (imageHeight - crop) / 2, crop, crop, 2, 2, 92, 92);
            context.restore();
            context.beginPath();
            context.arc(48, 48, 46, 0, Math.PI * 2);
            context.strokeStyle = '#7ee7ff';
            context.lineWidth = 5;
            context.stroke();
            const faceTexture = new THREE.CanvasTexture(canvas);
            faceTexture.colorSpace = THREE.SRGBColorSpace;
            faceTexture.needsUpdate = true;
            if (material.map) material.map.dispose();
            material.map = faceTexture;
            material.needsUpdate = true;
          }
          sourceTexture.dispose();
        }, undefined, () => { /* Keep initials visible if an image host blocks canvas access. */ });
      }
    });

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let down: { x: number; y: number } | null = null;
    const pointerDown = (event: PointerEvent) => { down = { x: event.clientX, y: event.clientY }; };
    const pointerUp = (event: PointerEvent) => {
      if (!down || Math.hypot(event.clientX - down.x, event.clientY - down.y) > 5) { down = null; return; }
      down = null;
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const faceHit = raycaster.intersectObjects(faceSprites, false)[0];
      const earthHit = raycaster.intersectObject(earth, false)[0];
      const hit = faceHit && (!earthHit || faceHit.distance < earthHit.distance)
        ? faceHit.object as THREE.Sprite
        : undefined;
      const index = hit?.userData.groupIndex;
      if (Number.isInteger(index)) setSelected(groups[index] || null);
    };
    const pointerLeave = () => {
      const tooltip = tooltipRef.current;
      if (tooltip) { tooltip.style.opacity = '0'; tooltip.style.visibility = 'hidden'; }
    };
    const pointerMove = (event: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects(faceSprites, false)[0];
      const earthHit = raycaster.intersectObject(earth, false)[0];
      const visibleFaceHit = hit && (!earthHit || hit.distance < earthHit.distance) ? hit : undefined;
      renderer.domElement.style.cursor = visibleFaceHit ? 'pointer' : 'grab';
      const tooltip = tooltipRef.current;
      if (tooltip) {
        if (visibleFaceHit) {
          const sprite = visibleFaceHit.object as THREE.Sprite;
          const group = groups[sprite.userData.groupIndex as number];
          tooltip.textContent = `${sprite.userData.memberName} · ${group?.label || ''}`;
          tooltip.style.left = `${event.clientX - rect.left + 14}px`;
          tooltip.style.top = `${event.clientY - rect.top + 14}px`;
          tooltip.style.opacity = '1';
          tooltip.style.visibility = 'visible';
        } else {
          tooltip.style.opacity = '0';
          tooltip.style.visibility = 'hidden';
        }
      }
    };
    renderer.domElement.addEventListener('pointerdown', pointerDown);
    renderer.domElement.addEventListener('pointerup', pointerUp);
    renderer.domElement.addEventListener('pointermove', pointerMove);
    renderer.domElement.addEventListener('pointerleave', pointerLeave);

    const resize = () => {
      const width = Math.max(1, host.clientWidth);
      const height = Math.max(330, host.clientHeight);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    let frame = 0;
    const animate = () => {
      frame = window.requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      controls.dispose();
      renderer.domElement.removeEventListener('pointerdown', pointerDown);
      renderer.domElement.removeEventListener('pointerup', pointerUp);
      renderer.domElement.removeEventListener('pointermove', pointerMove);
      renderer.domElement.removeEventListener('pointerleave', pointerLeave);
      earthGeometry.dispose();
      earthMaterial.map?.dispose();
      earthMaterial.dispose();
      faceSprites.forEach(sprite => earthGroup.remove(sprite));
      faceMaterials.forEach(material => {
        material.map?.dispose();
        material.dispose();
      });
      starsGeometry.dispose();
      (stars.material as THREE.Material).dispose();
      atmosphere.geometry.dispose();
      (atmosphere.material as THREE.Material).dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [groups]);

  const faceCount = Math.min(groups.reduce((total, group) => total + group.members.length, 0), 240);

  return (
    <div className="earth-search-wrap">
      <div className="earth-search-heading">
        <div>
          <span className="earth-live-label"><span className="earth-live-dot" /> LIVE PUBLIC MEMBER MAP</span>
          <p>Drag to spin · scroll or pinch to zoom · select a lit location to meet builders there.</p>
        </div>
        <span className="earth-member-count">{faceCount} profile photos · {groups.length} city / country labels</span>
      </div>
      <div className="earth-stage">
        <div ref={hostRef} className="earth-canvas" role="application" aria-label="Interactive globe with member profile photos and city and country locations">
          <div ref={tooltipRef} className="earth-marker-tooltip" role="status" />
        </div>
        <div className="earth-vignette" aria-hidden="true" />
        {webglUnsupported && (
          <div className="earth-fallback" role="img" aria-label="World map of LINKUP member locations">
            <span>Interactive 3D is not available in this browser. Use the location buttons to explore public builders.</span>
          </div>
        )}
        <div className="earth-hint"><span>✦</span> Explore founders around the world</div>
        {selected && (
          <aside className="earth-place-panel" aria-label={`${selected.label} public members`}>
            <div className="earth-panel-heading">
              <div><span className="earth-panel-kicker">{selected.precision} · {selected.members.length} {selected.members.length === 1 ? 'builder' : 'builders'}</span><h3>{selected.label}</h3></div>
              <button type="button" onClick={() => setSelected(null)} aria-label="Close location results">×</button>
            </div>
            <div className="earth-place-list">
              {selected.members.map(member => (
                <a key={member.uid} href={member.url} className="earth-place-member">
                  {member.image ? <img src={member.image} alt="" loading="lazy" referrerPolicy="no-referrer" /> : <span className="earth-place-initials">{member.name.split(/\s+/).slice(0, 2).map(part => part[0]).join('').toUpperCase()}</span>}
                  <span><b>{member.name}</b><small>{[member.occupation, member.company].filter(Boolean).join(' · ') || member.skills.slice(0, 3).join(', ')}</small></span>
                  <span className="earth-member-arrow">↗</span>
                </a>
              ))}
            </div>
          </aside>
        )}
      </div>
      {groups.length > 0 && (
        <div className="earth-place-chips" aria-label="Search builders by place">
          {groups.slice(0, 8).map(group => (
            <button key={group.key} type="button" className="earth-place-chip" aria-pressed={selected?.key === group.key} onClick={() => setSelected(group)}>
              {group.label} · {group.members.length}
            </button>
          ))}
        </div>
      )}
      {groups.length === 0 && <p className="earth-no-locations">No matching public location is available for these loaded profiles yet. Try a different search or role filter.</p>}
    </div>
  );
};
