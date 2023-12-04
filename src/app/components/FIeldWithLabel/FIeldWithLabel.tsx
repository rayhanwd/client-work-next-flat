import React, { ChangeEvent, FocusEvent } from "react";

interface Props {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  name?: string;
  label: string;
  type:string;
  placeholder?: string;
}

export default function FIeldWithLabel({
  onChange,
  onBlur,
  name,
  label,
  type,
  placeholder,
}: Props) {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="field-label mb-[11px]">
        {label}
      </label>
      <input
        type={type}
        className="field-style"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}

/*
border-radius: 4px;
border: 1px solid #868686;
margin-top: 18px ;
margin-bottom: 18px ;
margin-left: 20px ;
color: #868686;
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: capitalize;
*/ 