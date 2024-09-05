'use client';
import { Marck_Script } from 'next/font/google';
import { motion } from 'framer-motion';
import StoresDownloader from '@/components/ui/download/StoresDownloader';
import { FaChevronDown } from 'react-icons/fa';

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

  const arrowVariants = {
    initial: { opacity: 1, y: 10 },
    animate: {
      opacity: 1,
      y: [0, 10, 0], // Движение вверх и вниз
      transition: {
        duration: 1.5, // Время одного цикла анимации
        repeat: Infinity, // Бесконечное повторение
        ease: 'easeInOut', // Плавная анимация
      },
    },
  };


  return (
    <>
      <div className="p-8 lg:p-4 sm:p-4 relative flex flex-col justify-center min-h-[100dvh] sm:w-full">
        <div className="relative flex flex-col justify-center items-center sm:mb-10">
          <motion.h1
            className="box text-mainDark font-bold text-[15.0vw] pointer-events-none"
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
            className={`${mark.className} text-mainRose text-[10vw] absolute bottom-0 pointer-events-none`}
          >
            {assistantText.split('').map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.h2>
        </div>
        <StoresDownloader />
        <motion.div
          className="absolute bottom-5 left-1/2 flex justify-center items-center"
          variants={arrowVariants}
          initial="initial"
          animate="animate"
        >
          <FaChevronDown className="text-3xl" />
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;
