'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import googleplay from '@/../public/stores/googleplay.png';
import appstore from '@/../public/stores/appstore.png';
import Link from 'next/link';

export default function StoresDownloader() {
  return (
    <motion.div
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.4, type: 'spring' }}
      className="flex flex-col text-left max-w-[400px] text-xl text-gray-800 p-2 border rounded-lg bg-white gap-2"
    >
      <h2 className="cursor-default text-mainDark text-2xl sm:text-lg">Ассистент для &quot;ККИ Берсерк&quot;</h2>
      <p className="text-grayLight text-lg">Доступно для загрузки:</p>
      <motion.div initial={{ opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.3, type: 'spring' }} className="flex flex-row gap-2 sm:flex-col items-center">
        <Link
          href="https://play.google.com/store/apps/details?id=com.vlasov.berserk_assistant"
          target="_blank"
          className="w-full h-full flex justify-center items-center transition-all hover:opacity-[80%]"
        >
          <Image src={googleplay} alt="Скачать из Google Play" className=" w-full max-h-full object-contain " placeholder="empty" priority />
        </Link>
        <Link href="https://apps.apple.com/us/app/кки-берсерк-ассистент/id6627342092" target="_blank" className="w-full h-full flex justify-center items-center transition-all hover:opacity-[80%]">
          <Image src={appstore} alt="Скачать из App Store" className=" w-full max-h-full object-contain " placeholder="empty" priority />
        </Link>
      </motion.div>
    </motion.div>
  );
}
