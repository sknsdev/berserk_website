export interface FormField {
  name: string;
  label: string;
  type: string;
}

export const formFields: FormField[] = [
  {
    name: 'name',
    label: 'Имя',
    type: 'text',
  },
  {
    name: 'theme',
    label: 'Тема',
    type: 'text',
  },
  {
    name: 'message',
    label: 'Сообщение',
    type: 'text',
  },
];
