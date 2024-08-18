import React from 'react';

interface IMainProps extends React.HTMLAttributes<HTMLDivElement> {}

const Main = ({ children, className, ...props }: IMainProps) => {
  return (
    <main
      className={`global-height-main flex w-full flex-col items-center pt-16 ${className}`}
      id="main"
      {...props}
    >
      {children}
    </main>
  );
};

export default Main;
