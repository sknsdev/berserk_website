'use client';

import Link from 'next/link';
import React from 'react';
import { account } from '@/lib/appwrite/client';

type PasswordRecoveryClientProps = {
  initialUserId?: string;
  initialSecret?: string;
};

const PasswordRecoveryClient: React.FC<PasswordRecoveryClientProps> = ({
  initialUserId,
  initialSecret,
}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [isRequestLoading, setIsRequestLoading] = React.useState(false);
  const [isResetLoading, setIsResetLoading] = React.useState(false);
  const [requestSuccess, setRequestSuccess] = React.useState('');
  const [resetSuccess, setResetSuccess] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const hasRecoveryParams = Boolean(initialUserId && initialSecret);
  const hasBrokenRecoveryLink =
    Boolean(initialUserId) !== Boolean(initialSecret);

  const resetFeedback = () => {
    setErrorMessage('');
    setRequestSuccess('');
    setResetSuccess('');
  };

  const handleRecoveryRequest = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    resetFeedback();

    if (!email.trim()) {
      setErrorMessage('Укажите email, на который зарегистрирован аккаунт.');
      return;
    }

    if (typeof window === 'undefined') {
      setErrorMessage('Не удалось определить адрес сайта для ссылки восстановления.');
      return;
    }

    setIsRequestLoading(true);

    try {
      const recoveryUrl = new URL('/account/recovery', window.location.origin)
        .toString();

      await account.createRecovery({
        email: email.trim(),
        url: recoveryUrl,
      });

      setRequestSuccess(
        'Письмо для восстановления отправлено. Проверьте почту и перейдите по ссылке из письма.',
      );
      setEmail('');
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Не удалось отправить письмо для восстановления пароля.';
      setErrorMessage(message);
    } finally {
      setIsRequestLoading(false);
    }
  };

  const handlePasswordReset = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    resetFeedback();

    if (!initialUserId || !initialSecret) {
      setErrorMessage('Ссылка восстановления неполная или устарела.');
      return;
    }

    if (password.length < 8) {
      setErrorMessage('Новый пароль должен содержать минимум 8 символов.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Пароли не совпадают. Проверьте ввод и попробуйте снова.');
      return;
    }

    setIsResetLoading(true);

    try {
      await account.updateRecovery({
        userId: initialUserId,
        secret: initialSecret,
        password,
      });

      setResetSuccess(
        'Пароль обновлён. Теперь можно войти в аккаунт с новым паролем.',
      );
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Не удалось обновить пароль. Возможно, ссылка истекла.';
      setErrorMessage(message);
    } finally {
      setIsResetLoading(false);
    }
  };

  return (
    <main className="w-full px-4 pb-16 pt-32 sm:pt-28">
      <section className="mx-auto max-w-3xl rounded-[2rem] border border-[#e7c8ae] bg-white/90 p-8 shadow-[0_24px_70px_rgba(51,27,10,0.10)] backdrop-blur sm:p-5">
        <div className="rounded-full bg-[#fff1e4] px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#b16332] w-fit">
          Аккаунт Appwrite
        </div>
        <h1 className="mt-5 text-4xl font-black leading-tight text-mainDark sm:text-3xl">
          {hasRecoveryParams
            ? 'Задайте новый пароль'
            : 'Восстановление пароля'}
        </h1>
        <p className="mt-4 text-base leading-7 text-[#635951]">
          {hasRecoveryParams
            ? 'Ссылка из письма подтверждена. Введите новый пароль для вашего аккаунта.'
            : 'Укажите email от аккаунта, и мы отправим ссылку для сброса пароля.'}
        </p>

        {hasBrokenRecoveryLink ? (
          <div className="mt-6 rounded-[1.4rem] border border-amber-300 bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-900">
            Ссылка восстановления повреждена: в ней не хватает обязательных
            параметров. Запросите новое письмо ниже.
          </div>
        ) : null}

        {errorMessage ? (
          <div className="mt-6 rounded-[1.4rem] border border-red-200 bg-red-50 px-5 py-4 text-sm leading-6 text-red-700">
            {errorMessage}
          </div>
        ) : null}

        {requestSuccess ? (
          <div className="mt-6 rounded-[1.4rem] border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm leading-6 text-emerald-700">
            {requestSuccess}
          </div>
        ) : null}

        {resetSuccess ? (
          <div className="mt-6 rounded-[1.4rem] border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm leading-6 text-emerald-700">
            {resetSuccess}
          </div>
        ) : null}

        {hasRecoveryParams ? (
          <form className="mt-8 grid gap-5" onSubmit={handlePasswordReset}>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-mainDark">
                Новый пароль
              </span>
              <input
                type="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                placeholder="Минимум 8 символов"
                className="w-full rounded-2xl border border-[#d9c6b7] bg-[#fffaf4] px-4 py-3 text-base outline-none transition focus:border-[#b16332] focus:ring-2 focus:ring-[#f4d0b4]"
                autoComplete="new-password"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-mainDark">
                Повторите пароль
              </span>
              <input
                type="password"
                value={confirmPassword}
                onChange={event => setConfirmPassword(event.target.value)}
                placeholder="Повторите новый пароль"
                className="w-full rounded-2xl border border-[#d9c6b7] bg-[#fffaf4] px-4 py-3 text-base outline-none transition focus:border-[#b16332] focus:ring-2 focus:ring-[#f4d0b4]"
                autoComplete="new-password"
              />
            </label>

            <button
              type="submit"
              disabled={isResetLoading}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-[#231913] px-5 py-3 text-base font-semibold text-white transition hover:bg-[#3b291e] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isResetLoading ? 'Сохраняем пароль...' : 'Обновить пароль'}
            </button>
          </form>
        ) : (
          <form className="mt-8 grid gap-5" onSubmit={handleRecoveryRequest}>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-mainDark">
                Email
              </span>
              <input
                type="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                placeholder="name@example.com"
                className="w-full rounded-2xl border border-[#d9c6b7] bg-[#fffaf4] px-4 py-3 text-base outline-none transition focus:border-[#b16332] focus:ring-2 focus:ring-[#f4d0b4]"
                autoComplete="email"
              />
            </label>

            <button
              type="submit"
              disabled={isRequestLoading}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-[#231913] px-5 py-3 text-base font-semibold text-white transition hover:bg-[#3b291e] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isRequestLoading
                ? 'Отправляем письмо...'
                : 'Отправить ссылку для восстановления'}
            </button>
          </form>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-[#6b615a]">
          <Link
            href="/"
            className="font-semibold text-[#b16332] transition hover:text-[#8e4f27]"
          >
            На главную
          </Link>
          <Link
            href="/contact"
            className="font-semibold text-[#b16332] transition hover:text-[#8e4f27]"
          >
            Связаться с поддержкой
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PasswordRecoveryClient;
