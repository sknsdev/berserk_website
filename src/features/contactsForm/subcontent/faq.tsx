import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 w-full mb-2 pb-2" >
            <div
                className="flex items-center justify-between py-4 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className="text-lg font-semibold text-gray-800">
                    {question}
                </h2>
                <span className="text-gray-500">
                    {isOpen ? (
                        <FaMinus className="h-6 w-6" />
                    ) : (
                        <FaPlus className="h-6 w-6" />
                    )}
                </span>
            </div>
            {isOpen && (
                <div className="py-2 text-gray-600">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "Как удалить мой аккаунт?",
            answer: "Сообщите нам через форму обратной связи свою электронную почту, через которую вы регистрировались в приложении и добавьте, что вы хотите удалить аккаунт. Помните, что это действие не обратимо - все ваши колоды и т.п. будет удалено"
        },
        {
            question: "Как скачать и установить приложение?",
            answer: "Чтобы скачать приложение, откройте Google Play, RuStore или App Store на вашем смартфоне, найдите нужное приложение и нажмите на кнопку 'Скачать'. После загрузки приложение установится автоматически."
        },
        {
            question: "Как обновить установленное приложение?",
            answer: "Обновление приложения можно выполнить через магазин приложений. Обычно при наличии обновлений магазин уведомит вас, и вы сможете нажать 'Обновить' для установки последних версий."
        },
        {
            question: "Почему приложение может работать медленно?",
            answer: "Существует несколько причин, по которым приложение может работать медленно: нехватка памяти на устройстве, наличие большого количества запущенных процессов или старые версии приложения, которые нуждаются в обновлении."
        },
        {
            question: "Как удалить приложение с моего устройства?",
            answer: "Чтобы удалить приложение, перейдите в настройки вашего устройства, найдите раздел 'Приложения', выберите нужное приложение и нажмите 'Удалить'. Это удалит приложение с вашего устройства."
        },
        {
            question: "Как обеспечить безопасность моего приложения?",
            answer: "Для обеспечения безопасности приложения рекомендуется загружать приложения только из надежных источников, таких как официальные магазины приложений, и обновлять приложения регулярно, чтобы защититься от уязвимостей."
        },
    ];

    return (
        <div className="w-full mx-auto p-6 rounded-lg" id='FAQ'>
            <h1 className="text-2xl font-bold text-center mb-8">Часто задаваемые вопросы</h1>
            {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
};

export default FAQ;
