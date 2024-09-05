import { ContactsFormClient } from '@/features/contactsForm/contactsFormClient';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Поддержка - Берсерк ассистент',
  description: 'Поддержка пользоветелей приложения “Берсерк Ассистент”',
};

const Contact = () => {
  return (
    <div className='mt-28 p-10 sm:p-2'>
      <ContactsFormClient />
    </div>
  );
};

export default Contact;
