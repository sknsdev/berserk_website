import Image from 'next/image';
import React from 'react';
import { FaAppStore, FaGoogle, FaGooglePlay, FaVk } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="px-4 container mx-auto py-4 sm:px-3">
                <div className="flex md:flex-col justify-between items-center sm:items-start">
                    <div className="logo flex flex-row gap-2 w-fit">
                        <Image src='/logo.png' width={32} height={32} objectFit="contain" className='max-h-8' />
                        <h4 className="text-xl font-bold sm:mb-6">Берсерк Ассистент</h4>
                    </div>
                    <nav>
                        <ul className="flex lg:flex-col space-x-4 lg:space-x-0 text-center lg:text-start">
                            <li><a href="/" className="text-white hover:text-gray-300 ">Главная</a></li>
                            <li><a href="/contact" className="text-white hover:text-gray-300 ">Контакты</a></li>
                            <li><a href="/privacy" className="text-white hover:text-gray-300 ">Политика конфиденциальности</a></li>
                            <li><a href="https://support.berserk-app.ru/" className="text-white hover:text-gray-300 ">Центр помощи</a></li>
                        </ul>
                    </nav>
                    <div className="social-links flex justify-center items-center lg:flex-col">
                        <a href="https://vk.com/berserk_assistant" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 lg:w-full text-center mx-2">
                            <FaVk /> ВКонтакте
                        </a>
                        <a href="https://apps.apple.com/us/app/кки-берсерк-ассистент/id6627342092" className="flex items-center gap-2 lg:w-full text-center mx-2" >
                            <FaAppStore /> Appstore
                        </a>
                        <a href="https://www.rustore.ru/catalog/app/com.vlasov.berserk_assistant" className="flex items-center gap-2 lg:w-full text-center mx-2">
                            RuStore
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.vlasov.berserk_assistant" className="flex items-center gap-2 lg:w-full text-center mx-2">
                            <FaGooglePlay /> Google Play
                        </a>
                    </div>

                </div>
            </div>
            <div className="text-center mt-4">
                <p className="text-gray-400 text-sm">© 2024 Все права защищены.</p>
            </div>
        </footer>
    );
}

export default Footer;
