'use client';
import React, { ChangeEvent, FormEvent } from 'react';
import Input from '@/components/ui/input';
import { formFields } from '@/models/form/formFields';
interface FormData {
  [key: string]: string;
}
export const ContactsFormClient: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
      {formFields.map((field) => (
        <Input readOnly required errors={false} key={field.name} value={formData[field.name] || ''} onChange={handleChange} type={field.type} placeholder={field.placeholder} label={field.name} />
      ))}
      <button type="submit" className="rounded-lg">
        Отправить
      </button>
    </form>
  );
};
