'use client'
import StoresDownloader from '@/components/ui/download/StoresDownloader';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AppDescriptionSection: React.FC = () => {
  const sections = [
    {
      id: 1,
      title: 'Много возможностей',
      text: "Внутри приложения вас ожидают множество полезных функций, которые помогут не только разобраться в правилах и терминах, но и на поле боя",
      imgSide: "left",
      imgSrc: "1.jpg",
    },
    {
      id: 2,
      title: 'Полная коллекция карт',
      text: "Подбирайте нужные карты для своей колоды с помощью базы данных карт. В этой базе вы найдёте все карты из сетов, подходящие для турниров, синхронизируйте свои колоды между устройствами, в котором выполнен вход в ваш аккаунт",
      imgSide: "right",
      imgSrc: "2.jpg",
    },
    {
      id: 3,
      title: 'Убирайте листики',
      text: "Удобный калькулятор поможет вам рассчитать стоимость вашего отряда, вне зависимости от количества стихий",
      imgSide: "left",
      imgSrc: "3.jpg",
    },
    {
      id: 4,
      title: 'Организуйте турнир',
      text: "Проводите турниры (beta) прямо в приложении по швейцарской системе. Турниры будут доступны на всех ваших устройствах",
      imgSide: "right",
      imgSrc: "4.jpg",
    },
    {
      id: 5,
      title: 'Всегда правильный расчёт',
      text: "Уникальная функция «Расчёт атаки» позволит вам не подглядывать в шпаргалки во время броска кубика. Вы сразу узнаете результат и сможете выбрать подходящий вариант для вашей ситуации на поле боя.",
      imgSide: "left",
      imgSrc: "5.jpg",
    },
  ];

  return (
    <div className="py-10  max-w-4xl">
      <div className="container mx-auto px-4">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            className={`flex overflow-hidden justify-center gap-6 mb-8 rounded-lg shadow-lg px-28 pt-14 sm:p-4 bg-white ${section.imgSide === 'left' ? 'flex-row' : 'flex-row-reverse'} sm:flex-col-reverse`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center items-center h-full sm:w-auto mb-[-6rem] sm:max-h-96 overflow-hidden shadow-lg">
              <Image
                src={`/description/${section.imgSrc}`}
                alt={section.text} // Используйте соответствующее описание для доступности
                // layout="fill" // Задает размер изображения
                objectFit="cover" // Обеспечивает заполнение контейнера
                className="rounded-md sm:self-baseline "
                width={300}
                height={300}
              />
            </div>
            <div className={`flex-1 mt-7 sm:mt-0 ${section.imgSide === 'left' ? 'text-left' : 'text-right'} sm:text-center`}>
              <h3 className='bold text-mainDark text-2xl sm:text-xl mb-4 sm:mb-2'>{section.title}</h3>
              <span className=' text-blueGray-600 text-justify text-lg sm:text-base'>{section.text}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full">
        <StoresDownloader />
      </div>
    </div>
  );
};

export default AppDescriptionSection;
