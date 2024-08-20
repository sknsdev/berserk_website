'use client';
import { InputProps } from '@/models/form/IFormFields';
import * as React from 'react';

const Input: React.FC<InputProps> = ({
  containerStyle,
  errors,
  inputStyle,
  required,
  label,
  placeholder,
  type,
  value,
  onChange,
  ...rest
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const inputId = React.useId();

  const handleClick = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div>
      <label htmlFor={inputId} className="text-dark font-bold text-sm">
        {label}
      </label>
      <div onClick={handleClick} className="relative" style={containerStyle}>
        <input
          id={inputId}
          ref={inputRef}
          tabIndex={0}
          type={type}
          placeholder={placeholder}
          value={value}
          style={inputStyle}
          onChange={onChange}
          className={`p-2 rounded-lg max-w-[500px] w-[500px] sm:w-full  ${errors && !value && required ? 'border-mainRose' : 'border-gray-300'}`}
          {...rest}
        />
      </div>
      {/* {(errors || !value || required) && <p className="text-red-500">Обязательное поле</p>} Добавлен класс для красного текста */}
    </div>
  );
};

export default Input;
