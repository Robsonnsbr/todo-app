import React from 'react';
import { RiMailSendLine } from 'react-icons/ri';

interface LoadingSendingProps {
  isSubmitting: boolean;
}

const LoadingSending: React.FC<LoadingSendingProps> = ({ isSubmitting }) => {
  if (!isSubmitting) return null;

  return (
    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 z-20 flex animate-ping">
      <div className="flex flex-col justify-center items-center">
        <RiMailSendLine size={40} color="black" />
        <span>Enviando...</span>
      </div>
    </div>
  );
};

export default LoadingSending;
