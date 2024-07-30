'use client';
import { ContactsFormClient } from '@/features/contactsForm/contactsFormClient';
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.15, type: 'spring' }}>
      <ContactsFormClient />
    </motion.div>
  );
};

export default Contact;
