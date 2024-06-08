import React from 'react';

const ProfileSettingsSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
      <div className="animate-pulse bg-gray-200 rounded-lg h-[550px] w-full lg:col-span-3" />
      <div className="lg:col-span-2 flex flex-col gap-8">
        <div className="animate-pulse bg-gray-200 rounded-lg h-[150px]" />
        <div className="animate-pulse bg-gray-200 rounded-lg h-[100px]" />
        <div className="animate-pulse bg-gray-200 rounded-lg h-[100px]" />
      </div>
    </div>
  );
};

export default ProfileSettingsSkeleton;
