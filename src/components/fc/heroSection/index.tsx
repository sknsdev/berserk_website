'use client';
import phone from '@/../public/hero/phone.png';
import { Marck_Script } from 'next/font/google';
import Image from 'next/image';
import { motion } from 'framer-motion';
import StoresDownloader from '@/components/ui/download/StoresDownloader';

const mark = Marck_Script({ subsets: ['latin'], weight: '400' });

const HeroSection: React.FC = () => {
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
    <>
      <div className="relative flex flex-col justify-center  min-h-[100dvh]">
        <div className="relative flex flex-col justify-center items-center">
          <motion.h1
            className="box text-mainDark font-bold text-[350px] lg:text-[15vw] 2xl:text-[150px]  pointer-events-none"
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

          <motion.h2
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`${mark.className} text-mainRose text-[200px] 2xl:text-[10vw] lg:text-[10vw] absolute bottom-0 pointer-events-none`}
          >
            {assistantText.split('').map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.h2>
        </div>
        <StoresDownloader />
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1, type: 'spring' }}
            className="absolute w-[600px] lg:w-[50vw] min-w-[300px] bottom-0"
          >
            <Image src={phone} alt="phone" placeholder="empty" priority />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
