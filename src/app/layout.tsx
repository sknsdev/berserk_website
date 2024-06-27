import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
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
        <PageTransitionLayout>
          <main>
            <Header />
            <section className="relative flex flex-col bg-mainDark justify-center items-center min-h-screen max-h-[100dvh] p-8">
              <div className="w-full h-[100dvh] flex flex-col items-center justify-center bg-mainOrange">{children}</div>
            </section>
          </main>
        </PageTransitionLayout>
      </body>
    </html>
  );
}
