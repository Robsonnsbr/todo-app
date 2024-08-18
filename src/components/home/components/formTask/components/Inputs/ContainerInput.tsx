import React from 'react';

interface ContainerInputProps {
  children: React.ReactNode;
  className?: string;
}

export const ContainerInput: React.FC<ContainerInputProps> = ({
  children,
  className = ''
}) => {
  return <div className={`relative ${className}`}>{children}</div>;
};
