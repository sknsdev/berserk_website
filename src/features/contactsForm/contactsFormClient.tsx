'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FormField, formFields } from '@/models/form/formFields';

interface FormData {
  [key: string]: string;
}

const ContactsClient: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(() => {
    const initialState: FormData = {};
    formFields.forEach((field) => {
      initialState[field.name] = '';
    });
    return initialState;
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Форма отправлена успешно');
    } else {
      console.error('Ошибка при отправке формы');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center px-6 bg-[#fad6ac5b] rounded-lg p-4">
      {formFields.map((field: FormField) => (
        <div key={field.name} className="mb-4 ">
          <label htmlFor={field.name} className="block text-sm font-medium text-foreground">
            {field.label}
          </label>
          <input
            type="text"
            id={field.name}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            required
            className="p-2 block sm:w-64 shadow-sm sm:text-sm border-gray-300 rounded-md w-[500px]"
          />
        </div>
      ))}
      <button type="submit" className="bg-mainColor px-4 py-2 font-bold hover:bg-foreground hover:duration-300 rounded-md text-white">
        Отправить
      </button>
    </form>
  );
};

export default ContactsClient;
