import Link from 'next/link';
import React from 'react';

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
            <h1 className="text-3xl font-bold text-white lp:text-center">Берсерк ассистент</h1>
            <ul className="text-white items-center font-bold flex flex-wrap lp:flex-col gap-10 lp:gap-5">
              {pageList.map((el) => (
                <Link key={el.id} href={el.path} className="nav-link">
                  {el.name}
                </Link>
              ))}
              <li>
                <button className="bg-mainColor p-2 font-bold hover:bg-foreground hover:duration-300 rounded-md">Скачать</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
