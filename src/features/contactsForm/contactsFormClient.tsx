'use client';
import React, { ChangeEvent, FormEvent } from 'react';
import { formFields } from '@/models/form/formFields';
import Input from '@/components/ui/input';
import { Client, Databases } from 'appwrite';
import { generateRandomId } from '@/shared/generateId';
import { RequestStatusBanner } from '@/components/ui/requestStatusBanner/RequestStatusBanner';
import ContactComponent from './subcontent/alsoContact';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
import { LuFormInput } from 'react-icons/lu';
import FAQ from './subcontent/faq';
import { motion } from 'framer-motion';
import ContactInfo from './subcontent/contactinfo';

interface FormData {
  [key: string]: string;
}
export const ContactsFormClient: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({});
  const [isSended, setIsSended] = React.useState(false);
  const client = new Client();
  const requestId = generateRandomId();
  client
    .setEndpoint('https://appwrite.berserk-app.ru/v1')
    .setProject('66602f240028f4ac5b7c');

  const databases = new Databases(client);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, name: string) => {
    const { value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const allFieldsFilled = Object.keys(formData).every(key => formData[key].trim() !== '');
    if (!allFieldsFilled) {
      alert('Пожалуйста, заполните все поля, так нам будет легче помочь вам.');
      return;
    }
    try {
      const response = await databases.createDocument('66a8b44f001d1c9390b2', '66a8b45b003d6046356b', requestId.toString(), formData);
      setIsSended(true);
      console.log('Форма успешно отправлена:', response);
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
    }
  };
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.25, type: 'spring' }} className='max-w-4xl px-8 pt-8 sm:p-4 flex flex-col text-left text-xl text-gray-800 p-2 border rounded-lg bg-white gap-2 mx-9'>
      <div className="text-xl flex flex-col gap-4 sm:text-sm  p-6">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 sm:text-xl">
          Поддержка
        </h2>
        <p className="text-gray-600 mb-4">
          Наша команда разработчиков искренне ценит каждую вашу обратную связь. Ваши мнения и идеи помогают нам улучшать приложение и делать его более удобным для вас. Мы всегда готовы слушать и учитывать ваши пожелания и замечания!
        </p>
        <p className="text-gray-600 mb-4">
          Пожалуйста, не стесняйтесь обращаться к нам с любыми вопросами, предложениями или комментариями. Вы можете написать нам на электронную почту или связаться с нами через Telegram. Мы стремимся обеспечить вам наилучший опыт использования нашего приложения!
        </p>
        <p className="text-gray-600 mb-4">
          Наши пользователи часто спрашивают о новых функциях и обновлениях. Мы всегда открыты к предложениям, и будем рады услышать, что вы хотели бы видеть в нашем приложении. Также, если у вас возникли проблемы или вопросы, мы здесь, чтобы помочь!
        </p>
        <p className="text-gray-600 mb-4">
          Чтобы сделать ваше общение с нами еще более приятным, мы рекомендуем вам подписаться на наши уведомления о новостях и обновлениях в группе <a href='https://vk.com/berserk_assistant' target='_blank'>ВКонтакте</a>. Так вы всегда будете в курсе всех нововведений и получите максимальную выгоду от использования нашего приложения.
        </p>
        <div className="flex items-center space-x-4 mt-6 sm:flex-col">
          <a href="mailto:alexey.vlasov97@mail.ru" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800">
            <AiOutlineMail className="h-6 w-6 mr-1" />
            <span>Напишите на почту</span>
          </a>
          <a href="https://t.me/sketchns" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800">
            <BsTelegram className="h-6 w-6 mr-1" />
            <span>Связаться в Telegram</span>
          </a>
          <br />
          <a href="#" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 pointer-events-none cursor-default">
            <LuFormInput className="h-6 w-6 mr-1" />
            <span>Или заполните форму:</span>
          </a>

        </div>

      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center w-full">
        {formFields.map((field) => (
          <Input required errors={false} key={field.name} value={formData[field.name] || ''} onChange={e => handleChange(e, field.name)} type={field.type} placeholder={field.placeholder} label={field.label} />
        ))}
        <button type="submit" className="rounded-lg bg-slate-400 hover:scale-105 p-2">
          Отправить
        </button>
        <RequestStatusBanner isSended={isSended} message="Сообщение успешно отправлено!" onClose={() => setIsSended(false)} />

      </form>

      <ContactComponent />
      <FAQ />
      <ContactInfo />
    </motion.div>
  );
};
