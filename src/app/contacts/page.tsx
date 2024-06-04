import ContactsClient from '@/features/contactsForm/contactsFormClient';

const ContactsPage = () => {
  return (
    <main className="bg-hero-pattern bg-center bg-cover relative w-full min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-center font-bold text-4xl text-white mb-20">Контакты</h1>
      <ContactsClient />
    </main>
  );
};

export default ContactsPage;
