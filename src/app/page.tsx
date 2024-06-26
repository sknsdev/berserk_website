'use client';
import React from 'react';
import phone from '@/../public/hero/phone.png';
import { Marck_Script } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const mark = Marck_Script({ subsets: ['latin'], weight: '400' });

const HomePage = () => {
  return (
    <main>
      <header className="absolute z-10 p-8 w-full">
        <ul className="text-mainDark p-4 text-lg flex gap-4 justify-center">
          <Link href={'/'} className="hover:font-bold duration-300">
            Главная
          </Link>
          <Link href={'/support'} className="hover:font-bold duration-300">
            Поддержка
          </Link>
        </ul>
      </header>
      <section className="relative flex flex-col bg-mainDark justify-center items-center min-h-screen max-h-[100dvh] p-8">
        <div className="w-full h-[100dvh] flex flex-col items-center justify-center bg-mainOrange">
          <div>
            <div className="flex flex-col justify-center items-center">
              <motion.h1
                className="box text-mainDark font-bold text-[350px]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.1,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                БЕРСЕРК
              </motion.h1>

              <motion.h2
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                className={`${mark.className} text-mainRose text-[200px] absolute bottom-[200px]`}
              >
                Ассистент
              </motion.h2>
            </div>

            <motion.p
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, type: 'spring' }}
              className="text-left max-w-[400px] text-sm text-white"
            >
              Бесплатное мобильное приложение для ККИ “Берсерк” уже доступно в Google Store и Ru Store
            </motion.p>
          </div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5, type: 'spring' }} className="absolute w-[600px] bottom-0">
          <Image src={phone} alt="phone" placeholder="empty" priority />
        </motion.div>
      </section>
    </main>
  );
};

export default HomePage;
