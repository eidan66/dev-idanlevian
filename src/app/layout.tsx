import type { Metadata } from 'next';

import { AnalyticsTracker } from '@/components/AnalyticsTracker';
import { JsonLd } from '@/components/SEO/JsonLd';
import { SITE_CONFIG } from '@/config/site';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [...SITE_CONFIG.keywords],
  authors: [{ name: SITE_CONFIG.author, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.author,
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon/64.png', sizes: '64x64', type: 'image/png' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: [
      { url: '/favicon/120.png', sizes: '120x120', type: 'image/png' },
      { url: '/favicon/152.png', sizes: '152x152', type: 'image/png' },
      { url: '/favicon/180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/favicon/192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/favicon/512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'he_IL',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Idan Levian — Freelance React Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        <JsonLd />
        {/* Skip link for keyboard navigation */}
        <a
          href="#main"
          className="sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:p-4 focus:bg-cyan-500 focus:text-black focus:rounded focus:w-auto focus:h-auto focus:overflow-visible focus:outline-none focus:font-bold"
        >
          Skip to main content
        </a>

        <AnalyticsTracker />

        <main id="main">{children}</main>
      </body>
    </html>
  );
}
