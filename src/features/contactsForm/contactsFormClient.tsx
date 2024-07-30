'use client';
import React, { ChangeEvent, FormEvent } from 'react';
import { formFields } from '@/models/form/formFields';
import Input from '@/components/ui/input';
import { Client, Databases } from 'appwrite';
import { generateRandomId } from '@/shared/generateId';
import { RequestStatusBanner } from '@/components/ui/requestStatusBanner/RequestStatusBanner';

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
    console.log('Форма отправлена');
    try {
      const response = await databases.createDocument('66a8b44f001d1c9390b2', '66a8b45b003d6046356b', requestId.toString(), formData);
      setIsSended(true);
      console.log('Форма успешно отправлена:', response);
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
      {formFields.map((field) => (
        <Input required errors={false} key={field.name} value={formData[field.name] || ''} onChange={e => handleChange(e, field.name)} type={field.type} placeholder={field.placeholder} label={field.label} />
      ))}
      <button type="submit" className="rounded-lg bg-white p-2">
        Отправить
      </button>
      <RequestStatusBanner isSended={isSended} message="Сообщение успешно отправлено!" onClose={() => setIsSended(false)} />

    </form>
  );
};
