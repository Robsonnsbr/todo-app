import React from 'react';

interface ErrorMessageProps {
  message: string | undefined;
}

const ErrorMessageInput: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <p className="text-errorRed/60 text-sm absolute bg-transparent top-0 translate-x-1 w-fit">
      {message}
    </p>
  );
};

export default ErrorMessageInput;
