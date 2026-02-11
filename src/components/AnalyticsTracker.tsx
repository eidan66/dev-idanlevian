'use client';

import { useEffect } from 'react';

export function AnalyticsTracker() {
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_N8N_ANALYTICS_WEBHOOK_URL;
    if (!url || typeof window === 'undefined') {
      return;
    }

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        path: window.location.pathname,
        timestamp: new Date().toISOString(),
        referrer: document.referrer || undefined,
      }),
    }).catch(() => {}); // Fail silently - analytics should not break the site
  }, []);

  return null;
}
