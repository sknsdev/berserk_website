import DownloadButton from '@/utils/downloadButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/../public/logo.svg';
import InnerAnimate from '@/features/animateInOut/innerAnimate';
export const pageList = [
  {
    id: 0,
    name: 'Главная',
    path: '/',
  },
  {
    id: 1,
    name: 'Контакты',
    path: '/contacts', // Обновлено для использования якорной ссылки
  },
];

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20">
      <div className="p-4 lp:p-2">
        <div className="w-full bg-[#4343432c] py-4 px-24 sm:px-8 rounded-lg">
          <div className="flex lp:flex-col lp:gap-5 flex-wrap items-center justify-between">
            {/* <h1 className="text-3xl font-bold text-white lp:text-center">Берсерк ассистент</h1> */}
            <Image src={logo} alt="logo" width={48} height={48} loading="lazy" />

            <ul className="text-white items-center font-bold flex flex-wrap lp:flex-col gap-10 lp:gap-5">
              {pageList.map((el) => (
                <Link key={el.id} href={el.path} className="nav-link">
                  {el.name}
                </Link>
              ))}
              <li>
                <DownloadButton />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
