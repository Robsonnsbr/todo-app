import React, { forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  register?: UseFormRegisterReturn;
}

export const InputTextArea = forwardRef<
  HTMLTextAreaElement,
  InputTextAreaProps
>(({ register, className = '', ...props }, ref) => {
  return (
    <textarea
      {...register}
      ref={ref}
      className={`w-full -mb-2 rounded-sm bg-transparent ${className}`}
      {...props}
    />
  );
});

InputTextArea.displayName = 'InputTextArea';
