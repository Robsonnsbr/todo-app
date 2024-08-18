import React, { ReactNode, HTMLAttributes } from 'react';

interface LayoutWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const LayoutWrapper = ({ children, ...rest }: LayoutWrapperProps) => {
  return (
    <div
      {...rest}
      className="bg-lightGray w-full max-w-screen-2xl relative overflow-hidden"
    >
      {children}
    </div>
  );
};

export default LayoutWrapper;
