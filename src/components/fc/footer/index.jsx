import React from 'react';
import Image from 'next/image';
import { FaAppStore, FaGooglePlay, FaVk } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#e6d5c2] bg-[#1f1712] text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 xl:grid-cols-[1.2fr_0.8fr_0.9fr] md:grid-cols-1">
        <div>
          <div className="flex w-fit items-center gap-3 rounded-full bg-white/5 px-4 py-3">
            <Image src="/logo.png" width={40} height={40} alt="Логотип Берсерк Ассистент" className="h-10 w-10 rounded-xl" />
            <div>
              <h4 className="text-lg font-black uppercase tracking-[0.14em]">БЕРСЕРК Ассистент</h4>
              <p className="text-sm text-white/65">Помощник игрока для ККИ «Берсерк»</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
            Мобильное приложение с карточной базой, правилами, расчётом атаки, калькулятором
            отряда и инструментами для турниров.
          </p>
        </div>

        <nav className="grid gap-3 text-sm font-medium text-white/80">
          <a href="/" className="transition hover:text-white">Главная</a>
          <a href="/contact" className="transition hover:text-white">Связаться</a>
          <a href="/privacy" className="transition hover:text-white">Политика конфиденциальности</a>
          <a href="https://support.berserk-app.ru/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
            Центр помощи
          </a>
        </nav>

        <div className="grid gap-3 text-sm font-medium text-white/80">
          <a href="https://vk.com/berserk_assistant" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-white">
            <FaVk /> ВКонтакте
          </a>
          <a
            href="https://apps.apple.com/ru/app/кки-берсерк-ассистент/id6627342092"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <FaAppStore /> App Store
          </a>
          <a
            href="https://www.rustore.ru/catalog/app/com.vlasov.berserk_assistant"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-white"
          >
            RuStore
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.vlasov.berserk_assistant&hl=en&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <FaGooglePlay /> Google Play
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-sm text-white/45">
        © 2026 Берсерк Ассистент. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
