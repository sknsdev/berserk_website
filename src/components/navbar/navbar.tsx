'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/../public/logo.svg';
import { AnimatePresence, motion } from 'framer-motion';
import DownloadButton from '@/features/downloadButton';
import { pageList } from '@/models/navLinks';
import { itemVariants, listVariant } from '@/utils/animatePressets';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleDocumentClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target && !target.closest('.nav-menu')) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('click', handleDocumentClick);
    }

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isMenuOpen]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-20">
      <div className="p-4 lp:p-2">
        <div className="flex bg-[#4343432c] py-4 px-24 sm:px-8 rounded-lg">
          <div className="flex w-full lp:gap-5 flex-wrap items-center justify-between ">
            <Link href={'/'} className="flex direction-row gap-2 align-center items-center">
              <Image src={logo} alt="logo" width={48} height={48} loading="lazy" className="sm:w-8" />
              <h1 className="text-3xl font-bold text-white lp:text-center sm:text-xl">Берсерк ассистент</h1>
            </Link>
            <ul className="text-white items-center font-bold flex flex-wrap sm:flex-col gap-10 lp:gap-5 sm:hidden sm:justify-between">
              {pageList.map((el) => (
                <li key={el.id}>
                  <Link href={el.path} className="nav-link">
                    {el.name}
                  </Link>
                </li>
              ))}
              <li>
                <DownloadButton />
              </li>
            </ul>
          </div>
          <div className="sm:contents hidden">
            <button onClick={handleClick}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" color="#fff" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" color="#fff" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.ul
                  variants={listVariant}
                  initial="closed"
                  animate={isMenuOpen ? 'open' : 'closed'}
                  exit="closed"
                  className="nav-menu hidden bg-[#4343432c] backdrop-blur-sm py-2 px-8 mx-4 absolute left-0 rounded-md right-0 top-24 text-white font-bold sm:flex flex-col"
                >
                  {pageList.map((el) => (
                    <motion.li key={el.id} variants={itemVariants} className="py-2 w-full">
                      <Link href={el.path} className="nav-link" onClick={() => setIsMenuOpen(false)}>
                        {el.name}
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li variants={itemVariants} className="py-2 w-full">
                    <DownloadButton />
                  </motion.li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
