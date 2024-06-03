'use client';
import Image from 'next/image';
import hero_app from '@/../public/hero/hero.png';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <main className="bg-hero-pattern bg-center bg-cover relative w-full min-h-screen flex flex-col px-24 sm:px-8 align-center justify-center">
      <div className="text-white">
        <h1 className="text-5xl font-bold ">Берсерк ассистент</h1>
        <p className="font-light mt-3">Бесплатное мобильное приложение для ККИ “Берсерк” уже доступно!</p>
      </div>
      <div className="absolute bottom-0 right-0">
        <motion.div className="card-container" initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
          <Image src={hero_app} alt="hero application image example" className="object-cover w-[1000px] lg:w-[500px]" loading="lazy" />
        </motion.div>
      </div>
    </main>
  );
};

export default HomePage;
