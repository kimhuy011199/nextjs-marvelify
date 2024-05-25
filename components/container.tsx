import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        'w-full max-w-4xl lg:max-w-6xl mx-auto px-4 lg:px-6',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
