import React, { forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputTitleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn;
}

export const InputTitle = forwardRef<HTMLInputElement, InputTitleProps>(
  ({ register, className = '', ...props }, ref) => {
    return (
      <input
        {...register}
        ref={ref}
        className={`rounded-sm bg-transparent w-full ${className}`}
        {...props}
      />
    );
  }
);

InputTitle.displayName = 'InputTitle';
