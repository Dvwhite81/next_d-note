import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ClerkProvider } from '@clerk/nextjs';

import './globals.css';
import Navbar from '@/components/Navbar';
import PageContainer from '@/components/containers/PageContainer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'd-Note',
  description: 'Note taking app, built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          rootBox: 'flex h-full w-full items-center justify-center',
          cardBox: '',
          card: 'bg-[--primary-color]',
          headerTitle: 'text-white capitalize',
          headerSubtitle: 'text-white',
          button__google:
            'bg-[--bg-dark] text-white font-bold hover:bg-[--bg-dark] hover:scale-110',
          dividerLine: 'bg-white',
          dividerText: 'text-white',
          formFieldLabel: 'text-white',
          formButtonPrimary:
            'bg-[--bg-dark] text-white font-bold hover:bg-[--bg-dark] hover:scale-110',
          footer: 'hidden',
        },
      }}
    >
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          <PageContainer>{children}</PageContainer>
        </body>
      </html>
    </ClerkProvider>
  );
}
