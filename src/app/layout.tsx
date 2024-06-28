import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/fc/header';
import { PageTransitionLayout } from '@/features/pageTransition/layout';

const inter = Inter({ subsets: ['latin'] });
// const inter = Lora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Берсерк ассистент',
  description: 'Бесплатное мобильное приложение для ККИ “Берсерк”',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode | React.ReactPortal;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Header />
        <PageTransitionLayout>
          <div className="w-full min-h-[100dvh] flex flex-col items-center justify-center bg-mainOrange">{children}</div>
        </PageTransitionLayout>
      </body>
    </html>
  );
}
