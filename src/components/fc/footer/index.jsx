import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto py-4 sm:px-3">
                <div className="flex sm:flex-col justify-between items-center sm:items-start">
                    <div className="logo">
                        <h4 className="text-xl font-bold sm:mb-6">Берсерк Ассистент</h4>
                    </div>
                    <nav>
                        <ul className="flex sm:flex-col space-x-4">
                            <li><a href="/" className="text-white hover:text-gray-300">Главная</a></li>
                            <li><a href="/contact" className="text-white hover:text-gray-300">Контакты</a></li>
                            <li><a href="https://berserk-app.ru/privacy.docx" className="text-white hover:text-gray-300">Политика конфиденциальности</a></li>
                        </ul>
                    </nav>
                    <div className="social-links flex sm:flex-col">
                        <a href="https://vk.com/berserk_assistant" target="_blank" rel="noopener noreferrer" className="mx-2">VK</a>
                        <a href="#" className="mx-2 cursor-not-allowed" aria-disabled="true">App Store (Скоро)</a>
                        <a href="https://www.rustore.ru/catalog/app/com.vlasov.berserk_assistant" className="mx-2">RuStore</a>
                        <a href="https://play.google.com/store/apps/details?id=com.vlasov.berserk_assistant" className="mx-2">Google Play</a>
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
