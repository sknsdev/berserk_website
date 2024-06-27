'use client';
import { InputProps } from '@/models/form/IFormFields';
import * as React from 'react';

const Input: React.FC<InputProps> = ({ containerStyle, errors, inputStyle, required, label, placeholder, type, value, ...rest }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div>
      <label htmlFor={label} className="text-white font-bold text-sm">
        {label}
      </label>
      <div onClick={handleClick} className="relative" style={containerStyle}>
        <input
          ref={inputRef}
          tabIndex={0}
          type={type}
          placeholder={placeholder}
          value={value}
          style={inputStyle}
          className={`p-2 rounded-lg w-[500px]  ${errors && !value && required ? 'border-mainRose' : 'border-gray-300'}`}
          {...rest}
        />
      </div>
      {errors && !value && required && <p>Required!</p>}
    </div>
  );
};

export default Input;
