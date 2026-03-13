import type { Metadata } from 'next';
import PasswordRecoveryClient from '@/features/auth/PasswordRecoveryClient';

type RecoveryPageProps = {
  searchParams?: {
    userId?: string;
    secret?: string;
  };
};

export const metadata: Metadata = {
  title: 'Восстановление пароля | Берсерк Ассистент',
  description:
    'Страница восстановления пароля для аккаунта пользователя в Appwrite.',
};

const RecoveryPage = ({ searchParams }: RecoveryPageProps) => {
  return (
    <PasswordRecoveryClient
      initialUserId={searchParams?.userId}
      initialSecret={searchParams?.secret}
    />
  );
};

export default RecoveryPage;
