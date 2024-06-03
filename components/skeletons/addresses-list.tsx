import React from 'react';

const AddressesListSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-gray-200 rounded-lg h-[160px] w-full"
        />
      ))}
    </div>
  );
};

export default AddressesListSkeleton;
