'use client'
import { ContactsFormClient } from '@/features/contactsForm/contactsFormClient';
import React from 'react';
import Blocks from './../../components/download/blocks';
import { motion } from 'framer-motion';

type Props = {};

const Support = (props: Props) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.15, type: 'spring' }} >
      <ContactsFormClient />
    </motion.div>

  );
};

export default Support;
