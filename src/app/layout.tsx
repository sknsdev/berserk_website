import type { Metadata } from 'next';
import { Inter, Lora, Marck_Script } from 'next/font/google';
import './globals.css';

const inter = Lora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Берсерк ассистент',
  description: 'Бесплатное мобильное приложение для ККИ “Берсерк”',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>{children}</body>
    </html>
  );
}
