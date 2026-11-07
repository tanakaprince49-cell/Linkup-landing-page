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
  const country = parts.at(-1) || '';
  const city = parts.length > 1 ? parts.slice(0, -1).join(' ') : '';
  return resolveLocation(city, country) || resolveLocation('', country) || resolveLocation(parts[0] || '', '');
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

    const markerGeometry = new THREE.SphereGeometry(0.027, 12, 10);
    const markers: THREE.Mesh[] = [];
    const markerMaterials: THREE.MeshStandardMaterial[] = [];
    groups.forEach((group, index) => {
      const material = new THREE.MeshStandardMaterial({
        color: index < 5 ? 0xfbe63f : 0x63dcff,
        emissive: index < 5 ? 0x9c7011 : 0x075477,
        emissiveIntensity: 0.75,
        roughness: 0.28,
        metalness: 0.05,
      });
      markerMaterials.push(material);
      const marker = new THREE.Mesh(markerGeometry, material);
      marker.position.copy(vectorFor(group.lat, group.lng, radius + 0.025));
      marker.userData.placeKey = group.key;
      marker.userData.groupIndex = index;
      earthGroup.add(marker);
      markers.push(marker);

      if (group.members.length > 1) {
        const pulse = new THREE.Mesh(
          new THREE.SphereGeometry(0.043 + Math.min(group.members.length, 8) * 0.002, 12, 10),
          new THREE.MeshBasicMaterial({ color: index < 5 ? 0xfbe63f : 0x63dcff, transparent: true, opacity: 0.24, depthWrite: false }),
        );
        pulse.position.copy(marker.position);
        earthGroup.add(pulse);
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
      const markerHit = raycaster.intersectObjects(markers, false)[0];
      const earthHit = raycaster.intersectObject(earth, false)[0];
      const hit = markerHit && (!earthHit || markerHit.distance < earthHit.distance)
        ? markerHit.object as THREE.Mesh
        : undefined;
      const index = hit?.userData.groupIndex;
      if (Number.isInteger(index)) setSelected(groups[index] || null);
    };
    const pointerMove = (event: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      renderer.domElement.style.cursor = raycaster.intersectObjects(markers, false).length ? 'pointer' : 'grab';
    };
    renderer.domElement.addEventListener('pointerdown', pointerDown);
    renderer.domElement.addEventListener('pointerup', pointerUp);
    renderer.domElement.addEventListener('pointermove', pointerMove);

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
      earthGeometry.dispose();
      earthMaterial.map?.dispose();
      earthMaterial.dispose();
      markerGeometry.dispose();
      markerMaterials.forEach(material => material.dispose());
      starsGeometry.dispose();
      (stars.material as THREE.Material).dispose();
      atmosphere.geometry.dispose();
      (atmosphere.material as THREE.Material).dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [groups]);

  return (
    <div className="earth-search-wrap">
      <div className="earth-search-heading">
        <div>
          <span className="earth-live-label"><span className="earth-live-dot" /> LIVE PUBLIC MEMBER MAP</span>
          <p>Drag to spin · scroll or pinch to zoom · select a lit location to meet builders there.</p>
        </div>
        <span className="earth-member-count">{members.length} real profiles · {groups.length} mapped places</span>
      </div>
      <div className="earth-stage">
        <div ref={hostRef} className="earth-canvas" role="application" aria-label="Interactive globe with real world map and public LINKUP member locations" />
        <div className="earth-vignette" aria-hidden="true" />
        {webglUnsupported && (
          <div className="earth-fallback" role="img" aria-label="World map of LINKUP member locations">
            <span>Interactive 3D is not available in this browser. Public profiles are still searchable below.</span>
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
      {groups.length === 0 && <p className="earth-no-locations">No matching public location is available for these loaded profiles yet. You can still search and open their profiles below.</p>}
    </div>
  );
};
