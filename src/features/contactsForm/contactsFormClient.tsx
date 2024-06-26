'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FormField, formFields } from '@/models/form/formFields';

interface FormData {
  [key: string]: string;
}

export const ContactsFormClient: React.FC = () => {
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
    <form onSubmit={handleSubmit} className="flex flex-col items-center px-6 bg-yellow-200 rounded-lg p-4 shadow-md">
      {formFields.map((field: FormField) => (
        <div key={field.name} className="mb-4">
          <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
            {field.label}
          </label>
          <input
            type="text"
            id={field.name}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            required
            className="p-2 w-full sm:w-64 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
      ))}
      <button type="submit" className="bg-blue-500 px-4 py-2 font-bold rounded-md text-white hover:bg-blue-600 transition duration-300">
        Отправить
      </button>
    </form>
  );
};
