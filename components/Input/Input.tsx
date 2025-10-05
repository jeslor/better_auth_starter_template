import React from "react";

interface InputProps {
  label?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  className,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm font-medium text-white/30">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        // placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={` text-white/40 text-[14px] bg-white/10 focus:outline-none focus:ring-0 focus:transparent active:bg-white/20 rounded h-[40px] px-3 ${className}`}
      />
    </div>
  );
};

export default Input;
