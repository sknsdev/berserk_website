import React from 'react';

const ContactInfo = () => {
    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
            <h2 className="text-2xl text-center text-gray-800 mb-4  font-bold">Контактная информация</h2>
            <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-700">Имя разработчика:</h3>
                <p className="text-gray-600"><a href="mailto:alexey.vlasov97@mail.ru">Власов Алексей Сергеевич</a></p>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-700">Юридический адрес:</h3>
                <p className="text-gray-600">Ростов-на-Дону, Будённовский просп. 97, 2 этаж
                </p>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-700">Электронная почта:</h3>
                <p className="text-gray-600"><a href="mailto:alexey.vlasov97@mail.ru">alexey.vlasov97@mail.ru</a></p>
            </div>
            <div className='mb-4'>
                <h3 className="text-lg font-medium text-gray-700">Номер телефона:</h3>
                <p className="text-gray-600"><a href="tel:+7 988 556-25-20">+7 988 556-25-20</a></p>
            </div>
            <div>
                <h3 className="text-lg font-medium text-gray-700">Доступно консультации:</h3>
                <p className="text-gray-600"><a href="tel:+7 988 556-25-20">С понедельника по пятницу, 10:00 - 18:00</a></p>
            </div>
        </div>
    );
};

export default ContactInfo;
