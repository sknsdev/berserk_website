'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaBook,
  FaCalculator,
  FaCheckCircle,
  FaDice,
  FaFilter,
  FaInfoCircle,
  FaLayerGroup,
  FaLock,
  FaQrcode,
  FaRegClock,
  FaShieldAlt,
  FaStar,
  FaTable,
  FaTrophy,
  FaUsers,
} from 'react-icons/fa';
import StoresDownloader from '@/components/ui/download/StoresDownloader';

const trustMetrics = [
  {
    value: '4.9/5',
    label: 'RuStore',
    detail: '16 оценок и до 10 тыс. скачиваний',
  },
  {
    value: '5.0/5',
    label: 'App Store',
    detail: '28 оценок на iPhone и iPad',
  },
  {
    value: '1 000+',
    label: 'Google Play',
    detail: 'установок и активная Android-версия',
  },
];

const valueCards = [
  {
    title: 'Меньше споров во время партии',
    description:
      'Расчёт атаки, бросок кубика, правила и глоссарий помогают быстрее принимать решения прямо за столом.',
    icon: FaDice,
  },
  {
    title: 'Колоды и карты всегда под рукой',
    description:
      'База карт, фильтры по актуальным сетам и работа с колодами через QR-код сокращают время на подготовку.',
    icon: FaQrcode,
  },
  {
    title: 'Полезно новичкам и организаторам',
    description:
      'Приложение помогает изучать правила, подбирать состав отряда и даже проводить турниры по швейцарской системе.',
    icon: FaUsers,
  },
];

const featureCards = [
  {
    title: 'Полная база карт',
    description:
      'Все актуальные выпущенные карты, быстрый поиск и фильтрация по важным параметрам.',
    icon: FaFilter,
  },
  {
    title: 'Расчёт атаки',
    description:
      'Моментальный результат без бумажных шпаргалок и долгих сверок по таблицам.',
    icon: FaCheckCircle,
  },
  {
    title: 'Правила и термины',
    description:
      'Удобный глоссарий и раздел правил для обучения и разбора спорных ситуаций.',
    icon: FaBook,
  },
  {
    title: 'Калькулятор отряда',
    description:
      'Быстро считает стоимость отряда и помогает проверить сборку перед игрой.',
    icon: FaStar,
  },
  {
    title: 'QR-обмен колодами',
    description:
      'Импортируйте колоды из berserk-nxt и делитесь своими сборками между устройствами.',
    icon: FaQrcode,
  },
  {
    title: 'Турниры и судейские вопросы',
    description:
      'Организация турниров и новые инструменты для уточнения спорных карт прямо из приложения.',
    icon: FaTrophy,
  },
];

const menuHighlights = [
  {
    title: 'Таблица ударов',
    icon: FaTable,
  },
  {
    title: 'Калькулятор отряда',
    icon: FaCalculator,
  },
  {
    title: 'Колоды',
    icon: FaLayerGroup,
  },
  {
    title: 'База карт',
    icon: FaFilter,    
  },
  {
    title: 'Социальный раздел',
    icon: FaUsers,    
  },
  {
    title: 'Глоссарий терминов',
    icon: FaBook,    
  },
  {
    title: 'Провести турнир',
    icon: FaTrophy,    
  },
  {
    title: 'Бросок кубика',
    icon: FaDice,
  },
  {
    title: 'Правила игры',
    icon: FaShieldAlt,
  },
];

const freshnessItems = [
  'Новый 7-й сет «Гибель богов».',
  'Обновлённый глоссарий и более актуальные игровые термины.',
  'Возможность задать вопрос судьям о карте.',
  'Фильтрация по классу карты.',
  'Исправления турниров под текущие правила и мелкие доработки.',
];

const trustSignals = [
  {
    title: 'Безопасность данных',
    description:
      'Google Play указывает отсутствие передачи данных третьим лицам и шифрование данных при передаче.',
    icon: FaLock,
  },
  {
    title: 'Проверка RuStore',
    description:
      'Витрина RuStore помечает приложение как проверенное модератором по безопасности данных.',
    icon: FaShieldAlt,
  },
  {
    title: 'Живое развитие',
    description:
      'На витринах видно регулярное развитие: новые сеты, новые фильтры и улучшения для турниров.',
    icon: FaRegClock,
  },
];

const reviews = [
  {
    author: 'Максим, RuStore',
    text: 'Много полезного для новичков и освоения игры, особенно когда хочется быстро разобраться в механиках.',
  },
  {
    author: 'Станислав, RuStore',
    text: 'Отличное приложение с удобным интерфейсом, которое хочется видеть и для других форматов вселенной.',
  },
  {
    author: 'Vladimir, Google Play',
    text: 'Really great application! Respect.',
  },
];

const faq = [
  {
    question: 'Для кого подходит приложение?',
    answer:
      'Для новичков, активных игроков, организаторов турниров и всех, кто хочет быстрее ориентироваться в правилах и картах «Берсерка».',
  },
  {
    question: 'На каких устройствах доступен «Берсерк Ассистент»?',
    answer:
      'Приложение доступно на Android через Google Play и RuStore, а также на iPhone и iPad через App Store.',
  },
  {
    question: 'Что именно помогает ускорить игру?',
    answer:
      'Расчёт атаки, калькулятор отряда, база карт, правила, глоссарий и история бросков кубика сокращают время на спорные моменты.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const LandingPage = () => {
  return (
    <main className="w-full overflow-hidden">
      <section className="relative w-full px-4 pb-16 pt-28 sm:pt-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top_right,rgba(237,139,73,0.32),transparent_38%),radial-gradient(circle_at_top_left,rgba(255,71,71,0.16),transparent_32%)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:gap-8 md:grid-cols-1 md:pt-6 md:text-center">
          <motion.div
            className="relative z-10"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55 }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d7b28d] bg-white/80 px-4 py-2 text-sm font-semibold text-[#6b4f37] backdrop-blur">
              Помощник для игроков ККИ «Берсерк»
            </span>
            <h1 className="max-w-2xl text-6xl font-black uppercase leading-[0.94] tracking-[-0.04em] text-mainDark lg:text-5xl sm:text-4xl">
              Играть в «Берсерк» становится быстрее, понятнее и удобнее
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-[#5f554e] sm:text-base sm:leading-7">
              База карт, правила, глоссарий, расчёт атаки, калькулятор отряда, QR-колоды и
              турнирные инструменты в одном мобильном приложении для iPhone, iPad и Android.
            </p>
            <div className="mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-1">
              {trustMetrics.map(metric => (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-white/80 bg-white/85 p-4 shadow-[0_18px_50px_rgba(71,40,18,0.08)] backdrop-blur"
                >
                  <div className="text-2xl font-black text-mainDark">{metric.value}</div>
                  <div className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-[#b16332]">
                    {metric.label}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#655b53]">{metric.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 max-w-xl">
              <StoresDownloader />
            </div>
            <div className="mt-5 inline-flex flex-wrap items-center gap-3 text-sm font-medium text-[#6d625b] sm:justify-center">
              <span className="rounded-full bg-white/70 px-3 py-2">iPhone и iPad</span>
              <span className="rounded-full bg-white/70 px-3 py-2">Android и RuStore</span>
            </div>
          </motion.div>

          <motion.div
            className="relative flex min-h-[42rem] items-center justify-center lg:min-h-[36rem] sm:min-h-[28rem]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <div className="absolute inset-0 rounded-[3rem] bg-[linear-gradient(140deg,rgba(255,255,255,0.95),rgba(255,241,229,0.82)_42%,rgba(240,202,170,0.5))] shadow-[0_30px_90px_rgba(79,43,16,0.16)]" />
            <div className="absolute left-6 top-8 rounded-3xl bg-[#231913] px-5 py-4 z-20 text-white shadow-xl sm:left-4 sm:top-4 sm:max-w-[12rem]">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f6b37d]">
                Что внутри
              </div>
              <p className="mt-2 text-sm leading-6 text-white/80">
                Правила, карточная база, колоды, фильтры, турниры и быстрые расчёты прямо в
                кармане.
              </p>
            </div>
            <div className="z-20 absolute bottom-8 right-6 rounded-3xl bg-white px-5 py-4 text-mainDark shadow-xl sm:right-4 sm:max-w-[11rem]">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b16332]">
                Последнее обновление
              </div>
              <p className="mt-2 text-sm leading-6 text-[#5d554f]">
                Новый сет, глоссарий, вопросы судьям и улучшенные турниры.
              </p>
            </div>
            <motion.div
              className="relative z-10 flex w-full items-center justify-center"
              initial={{ y: 18 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
            >
              <div className="relative h-[36rem] w-[17rem] rotate-[-10deg] overflow-hidden rounded-[2.4rem] border border-white/70 bg-white shadow-[0_24px_70px_rgba(51,27,10,0.18)] lg:h-[30rem] lg:w-[14rem] sm:h-[22rem] sm:w-[10rem]">
                <Image
                  src="/store-media/appstore-frame-1.webp"
                  alt="Главный экран приложения Берсерк Ассистент"
                  fill
                  className="object-cover"
                  sizes="(max-width: 639px) 160px, 280px"
                />
              </div>
              <div className="absolute right-[3%] top-[10%] h-[26rem] w-[13rem] overflow-hidden rounded-[2.2rem] border border-white/70 bg-white shadow-[0_18px_60px_rgba(51,27,10,0.18)] lg:right-0 lg:h-[21rem] lg:w-[10.5rem] sm:hidden">
                <Image
                  src="/store-media/appstore-frame-7.webp"
                  alt="Экран с правилами и глоссарием приложения"
                  fill
                  className="object-cover"
                  sizes="220px"
                />
              </div>
              <div className="absolute bottom-[6%] left-[8%] h-[24rem] w-[12rem] overflow-hidden rounded-[2.2rem] border border-white/70 bg-white shadow-[0_18px_60px_rgba(51,27,10,0.16)] lg:left-0 lg:h-[19rem] lg:w-[9.5rem] sm:hidden">
                <Image
                  src="/store-media/appstore-frame-8.webp"
                  alt="Экран с картами всех сетов в приложении"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="w-full px-4 py-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-1 xl:grid-cols-3">
          {valueCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                className="rounded-[2rem] border border-[#ead9c7] bg-white/90 p-6 shadow-[0_16px_48px_rgba(71,40,18,0.07)]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1e4] text-xl text-[#ba6634]">
                  <Icon />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-mainDark">{card.title}</h2>
                <p className="mt-3 text-base leading-7 text-[#635951]">{card.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="w-full px-4 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 xl:grid-cols-[1.1fr_0.9fr] md:grid-cols-1">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55 }}
          >
            <span className="rounded-full bg-[#fff1e4] px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#b16332]">
              Что получает пользователь
            </span>
            <h2 className="mt-5 max-w-2xl text-4xl font-black leading-tight text-mainDark sm:text-3xl">
              Все ключевые игровые инструменты собраны в одном приложении
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#635951] sm:text-base sm:leading-7">
              «Берсерк Ассистент» помогает быстрее разбираться в правилах, подбирать карты,
              считать ключевые игровые ситуации, собирать колоды и готовиться к турнирам без
              лишних таблиц и заметок.
            </p>

            <div className="mt-8 grid gap-4">
              {featureCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.article
                    key={card.title}
                    className="flex gap-4 rounded-[1.75rem] border border-[#ead9c7] bg-white/90 p-5 shadow-[0_12px_36px_rgba(71,40,18,0.06)] sm:flex-col"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#231913] text-white">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-mainDark">{card.title}</h3>
                      <p className="mt-2 text-base leading-7 text-[#635951]">{card.description}</p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>

          <motion.aside
            className="rounded-[2.25rem] border border-[#ead9c7] bg-[#231913] p-6 text-white shadow-[0_24px_70px_rgba(51,27,10,0.18)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white/10">
                <Image
                  src="/store-media/googleplay-icon.png"
                  alt="Иконка приложения Берсерк Ассистент"
                  width={56}
                  height={56}
                  className="h-14 w-14 object-cover"
                />
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.16em] text-[#f5b584]">Внутри приложения</div>
                <div className="mt-1 text-2xl font-black">Набор инструментов на каждый матч</div>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-1">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
                {menuHighlights.map(item => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="relative min-h-[9.5rem] overflow-hidden rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                    >
                      {item.label ? (
                        <span className="absolute right-3 top-3 rounded-full bg-[#f5b584] px-2 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#2e1d14]">
                          {item.label}
                        </span>
                      ) : null}
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl text-[#ffd8b8]">
                        <Icon />
                      </div>
                      <div className="mt-6 max-w-[12rem] text-lg font-bold leading-6 text-white">
                        {item.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="w-full px-4 py-14">
        <div className="mx-auto grid max-w-6xl gap-6 xl:grid-cols-[0.95fr_1.05fr] md:grid-cols-1">

          <motion.article
            className="rounded-[2rem] border border-[#ead9c7] bg-[#fffaf4] p-7 shadow-[0_16px_48px_rgba(71,40,18,0.07)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <ul className="grid gap-4">
              {freshnessItems.map(item => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-[1.4rem] border border-[#ecd8c6] bg-white px-4 py-4 text-base leading-7 text-[#544943]"
                >
                  <span className="mt-1 text-[#b16332]">
                    <FaArrowRight />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </section>

      <section className="w-full px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-8 max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <span className="rounded-full bg-[#fff1e4] px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#b16332]">
              Доверие
            </span>
            <h2 className="mt-5 text-4xl font-black text-mainDark sm:text-3xl">
              Прозрачная безопасность и живое развитие приложения
            </h2>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-1 xl:grid-cols-3">
            {trustSignals.map((signal, index) => {
              const Icon = signal.icon;
              return (
                <motion.article
                  key={signal.title}
                  className="rounded-[2rem] border border-[#ead9c7] bg-white p-6 shadow-[0_16px_48px_rgba(71,40,18,0.07)]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#231913] text-white">
                    <Icon />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-mainDark">{signal.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#635951]">{signal.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-8 max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <span className="rounded-full bg-[#fff1e4] px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#b16332]">
              Отзывы игроков
            </span>
            <h2 className="mt-5 text-4xl font-black text-mainDark sm:text-3xl">
              Социальное доказательство прямо из магазинов приложений
            </h2>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-1 xl:grid-cols-3">
            {reviews.map((review, index) => (
              <motion.article
                key={review.author}
                className="rounded-[2rem] border border-[#ead9c7] bg-[#fffaf4] p-6 shadow-[0_16px_48px_rgba(71,40,18,0.07)]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <div className="flex items-center gap-1 text-[#f2a33a]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <FaStar key={starIndex} />
                  ))}
                </div>
                <p className="mt-5 text-lg leading-8 text-mainDark">&ldquo;{review.text}&rdquo;</p>
                <div className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#b16332]">
                  {review.author}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-14">
        <div className="mx-auto grid max-w-6xl gap-6 xl:grid-cols-[0.95fr_1.05fr] md:grid-cols-1">
          <motion.article
            className="rounded-[2rem] border border-[#ead9c7] bg-[#231913] p-7 text-white shadow-[0_16px_48px_rgba(71,40,18,0.12)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f5b584]">
              FAQ
            </span>
            <h2 className="mt-5 text-4xl font-black sm:text-3xl">Частые вопросы перед скачиванием</h2>
            <p className="mt-4 text-base leading-7 text-white/75">
              Короткие ответы на самые частые вопросы об устройстве приложения, поддерживаемых
              платформах и игровых сценариях.
            </p>
          </motion.article>

          <div className="grid gap-4">
            {faq.map((item, index) => (
              <motion.article
                key={item.question}
                className="rounded-[1.8rem] border border-[#ead9c7] bg-white p-6 shadow-[0_16px_48px_rgba(71,40,18,0.07)]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                transition={{ duration: 0.42, delay: index * 0.05 }}
              >
                <h3 className="text-xl font-bold text-mainDark">{item.question}</h3>
                <p className="mt-3 text-base leading-7 text-[#635951]">{item.answer}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-4 pb-20 pt-10">
        <motion.div
          className="mx-auto max-w-6xl rounded-[2.5rem] border border-[#e7c8ae] bg-[linear-gradient(135deg,#1f1712,#412b1d_38%,#d9763d)] p-8 text-white shadow-[0_24px_70px_rgba(51,27,10,0.18)] sm:p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
        >
          <div className="grid items-center gap-8 xl:grid-cols-[1fr_auto] md:grid-cols-1">
            <div>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#ffd0ad]">
                Скачать сейчас
              </span>
              <h2 className="mt-5 max-w-2xl text-4xl font-black leading-tight sm:text-3xl">
                Скачайте «Берсерк Ассистент», чтобы держать правила, карты и расчёты рядом на каждой игре
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80 sm:text-base sm:leading-7">
                Выберите удобный магазин и установите приложение на iPhone, iPad или Android,
                чтобы все важные инструменты для игры были под рукой.
              </p>
            </div>
            <div className="w-full max-w-xl">
              <StoresDownloader />
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default LandingPage;
