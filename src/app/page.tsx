'use client';
import React from 'react';
import phone from '@/../public/hero/phone.png';
import { Marck_Script } from 'next/font/google';
import Image from 'next/image';
import { motion } from 'framer-motion';

const mark = Marck_Script({ subsets: ['latin'], weight: '400' });

const HomePage = () => {
  const assistantText = 'Ассистент'; // текст для typing - анимации

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        delay: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Установите желаемую продолжительность анимации (в секундах)
      },
    },
  };

  return (
    <main>
      <div>
        <div className="flex flex-col justify-center items-center">
          <motion.h1
            className="box text-mainDark font-bold text-[350px]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            БЕРСЕРК
          </motion.h1>

          <motion.h2 variants={containerVariants} initial="hidden" animate="visible" className={`${mark.className} text-mainRose text-[200px] absolute bottom-[280px]`}>
            {assistantText.split('').map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.h2>
          {/* <motion.svg width={600} height={600} viewBox="0 0 600 600" initial="hidden" animate="visible"></motion.svg> */}
        </div>
        <motion.p initial={{ x: '-100%', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.4, type: 'spring' }} className="text-left max-w-[400px] text-sm text-white">
          Бесплатное мобильное приложение для ККИ “Берсерк” уже доступно в Google Store и Ru Store
        </motion.p>
      </div>
      <div className="flex justify-center">
        <motion.div initial={{ opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.1, type: 'spring' }} className="absolute w-[600px] bottom-0">
          <Image src={phone} alt="phone" placeholder="empty" priority />
        </motion.div>
      </div>
    </main>
  );
};

export default HomePage;
