import Spinner from '@/components/spinner';
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-[80vh]">
      <div className="flex flex-col items-center justify-center gap-4">
        <Spinner className="h-10 w-10 text-primary border-t-primary border-b-primary border-r-primary border-4" />
        <span>Setting up checkout session...</span>
      </div>
    </div>
  );
};

export default Loading;
