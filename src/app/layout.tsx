import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/fc/header';
import Footer from '@/components/fc/footer';
import { PageTransitionLayout } from '@/features/pageTransition/layout';
import Script from 'next/script';

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
      <Script id="metrika-counter" strategy="afterInteractive">
            {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
              ym(98243631, "init", {
                    defer: true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              });`
            }
          </Script>
        <Header />
        <PageTransitionLayout>
          <div className="w-full min-h-[100dvh] flex flex-col items-center justify-center">{children}</div>
          <Footer />
        </PageTransitionLayout>
      </body>
    </html>
  );
}
