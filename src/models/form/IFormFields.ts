export interface IFormField {
  name: string;
  label?: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}

export interface InputProps {
  errors: boolean;
  inputStyle?: React.CSSProperties;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
  label?: string;
  required?: boolean;
  type: string;
  value: string;
  containerStyle?: React.CSSProperties;
}

// ref={inputRef}
// tabIndex={0}
// type={type}
// placeholder={placeholder}
// value={value}
// style={inputStyle}
// className

// formFields.d.ts
export interface IFormField {
  name: string;
  label?: string;
  type: string;
  placeholder?: string;
}
