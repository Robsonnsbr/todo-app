import React, { HTMLAttributes } from 'react';

interface IContainerProps extends HTMLAttributes<HTMLDivElement> {}

const ContainerMedium = ({ children, className, ...rest }: IContainerProps) => {
  return (
    <div
      {...rest}
      className={`container w-full h-fit mx-auto px-2 sm:w-4/5 ${className}`}
    >
      {children}
    </div>
  );
};

export default ContainerMedium;
