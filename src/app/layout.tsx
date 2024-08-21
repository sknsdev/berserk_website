import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/fc/header';
import Footer from '@/components/fc/footer';
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
    <html lang="ru-RU">
      <body className={`${inter.className} bg-mainOrange`}>
        <Header />
        <PageTransitionLayout>
          <div className="w-full min-h-[100dvh] flex flex-col items-center justify-center">{children}</div>
          <Footer />
        </PageTransitionLayout>
      </body>
    </html>
  );
}
