'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import googleplay from '@/../public/stores/googleplay.png';
import appstore from '@/../public/stores/appstore.png';
import rustore from '@/../public/stores/rustore.png';

export default function StoresDownloader() {
  const stores = [
    {
      href: 'https://play.google.com/store/apps/details?id=com.vlasov.berserk_assistant&hl=en&pli=1',
      image: googleplay,
      alt: 'Скачать Берсерк Ассистент из Google Play',
    },
    {
      href: 'https://apps.apple.com/ru/app/кки-берсерк-ассистент/id6627342092',
      image: appstore,
      alt: 'Скачать Берсерк Ассистент из App Store',
    },
    {
      href: 'https://www.rustore.ru/catalog/app/com.vlasov.berserk_assistant',
      image: rustore,
      alt: 'Скачать Берсерк Ассистент из RuStore',
    },
  ];

  return (
    <motion.div
      initial={{ y: 18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="rounded-[2rem] border border-[#e6d4c1] bg-white/95 p-4 text-left shadow-[0_16px_48px_rgba(71,40,18,0.08)] backdrop-blur"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="cursor-default text-2xl font-black text-mainDark sm:text-xl">
            Скачать приложение
          </h2>
          <p className="mt-2 max-w-md text-sm leading-6 text-[#655b53]">
            Выберите удобный магазин: Google Play, App Store или RuStore.
          </p>
        </div>
        <div className="rounded-full bg-[#fff1e4] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#b16332]">
          iPhone · iPad · Android
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="mt-4 grid gap-3"
      >
        {stores.map(store => (
          <Link
            key={store.href}
            href={store.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-2xl border border-[#f1e0cd] bg-[#fffaf4] p-3 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(71,40,18,0.08)]"
          >
            <Image
              src={store.image}
              alt={store.alt}
              className="h-auto w-full max-w-[220px] object-contain"
              placeholder="empty"
              priority
            />
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
}
