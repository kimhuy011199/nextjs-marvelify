import React from 'react';
import { Search } from 'lucide-react';

const SearchContainerSkeleton: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-[80vh]">
      <div className="flex flex-col items-center justify-center gap-4">
        <Search className="text-primary" size={48} />
        <span>Setting up search engine...</span>
      </div>
    </div>
  );
};

export default SearchContainerSkeleton;
