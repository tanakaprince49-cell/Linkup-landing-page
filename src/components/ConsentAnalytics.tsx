import React, { useEffect, useRef, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';

const readConsent = () => {
  try { return window.localStorage.getItem('linkup_cookie_consent') === 'true'; }
  catch { return false; }
};

export const ConsentAnalytics: React.FC = () => {
  const [accepted, setAccepted] = useState(false);
  const previouslyEnabled = useRef(false);
  useEffect(() => {
    const update = () => {
      const next = readConsent();
      if (previouslyEnabled.current && !next) { window.location.reload(); return; }
      previouslyEnabled.current = next;
      setAccepted(next);
    };
    update();
    window.addEventListener('storage', update);
    window.addEventListener('linkup:analytics-consent', update);
    return () => {
      window.removeEventListener('storage', update);
      window.removeEventListener('linkup:analytics-consent', update);
    };
  }, []);
  return accepted ? <Analytics /> : null;
};
