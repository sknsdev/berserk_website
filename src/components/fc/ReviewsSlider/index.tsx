'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa'; // Импортируем иконку звезды

const reviews = [
    {
        author: "Антон",
        store: 'RuStore',
        rating: 5,
        date: "16 июл 2024",
        text: "Приложение, отличное спасибо! Не нашёл куда написать в поддержку (на сайте приложения не получилось) поэтому пишу сюда. Создаю колоду с названием \"колода\", накидал карт, потом решил переименовать её в \"колода1\", карты из колоды пропали. Вернул название на изначально \"колода\", карты появились. Приложение огонь, надеюсь мой комментарий поможет сделать его ещё лучше)",
    },
    {
        author: "Grs",
        store: 'RuStore',
        rating: 5,
        date: "29 мая 2024",
        text: "Только вливаюсь в эту игру и чуть с ума не сошел пока писал на листке все действия. Спасибо разрабы что упростили эту схемку. Приложенька удобная, ещё б возможность составлять деки и цены б не было. (P.s. реализовали даже больше нужного, гении, не иначе)",
    },
    {
        author: "Вячеслав",
        store: 'RuStore',
        rating: 5,
        date: "23 мая 2024",
        text: "удобный калькулятор и классно сделана фильтрация по картам",
    },
    {
        author: "Максим",
        store: 'RuStore',
        rating: 5,
        date: "6 июня 2024",
        text: "Красиво и функционально. Подсчёт простой атаки - огонь 🔥",
    },
    {
        author: "Виталий",
        store: 'RuStore',
        rating: 5,
        date: "23 мая 2024",
        text: "Давно играю в Берс, но такого удобного приложения ещё не встречал 👍",
    },
];

const ReviewsSlider = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 4000); // 4000 миллисекунд = 4 секунды

        return () => clearInterval(interval); // Очистка интервала при размонтировании
    }, []);

    const { author, store, rating, date, text } = reviews[currentReviewIndex];

    return (
        <div className="flex w-full p-6 sm:p-2 justify-center min-h-64 max-w-4xl">

            <div className="bg-gray-100 p-5 rounded-lg shadow-lg overflow-hidden w-full">
                <div className="flex items-center mb-2 sm:flex-col">

                    <div className="flex flex-row ">
                        {/* Отображаем иконки звезд */}
                        {[...Array(rating)].map((_, index) => (
                            <FaStar key={index} className="text-yellow-500 mr-1" />
                        ))}
                    </div>
                    <span className="text-gray-500 ml-2">{date} из {store}</span>
                </div>
                <motion.div
                    key={currentReviewIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    style={{ minHeight: '80px' }}
                >
                    <h3 className="font-bold text-lg">{author}</h3>
                    <p className="mt-2">{text}</p>
                </motion.div>
            </div>
        </div>
    );
};

export default ReviewsSlider;
