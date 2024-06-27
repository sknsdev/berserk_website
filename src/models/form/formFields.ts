import { IFormField } from './IFormFields';

export const formFields: IFormField[] = [
  {
    name: 'name',
    label: 'Имя',
    type: 'text',
    placeholder: 'Ваше имя',
    required: true,
  },
  {
    name: 'theme',
    label: 'Тема',
    required: true,
    type: 'text',
    placeholder: 'Тема сообщения',
  },
  {
    name: 'message',
    label: 'Сообщение',
    required: true,
    type: 'text',
    placeholder: 'Ваше сообщение',
  },
];
