import React, { Suspense } from 'react';
import {
  SettingCard,
  SettingContent,
  SettingDescription,
  SettingHeading,
} from '@/components/settings';
import ProfileSettings from './components/profile-settings';
import ProfileSettingsSkeleton from '@/components/skeletons/profile-settings';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profile - Marvel Caseshop',
};

const Page: React.FC = () => {
  return (
    <SettingCard>
      <SettingHeading>Profile Settings</SettingHeading>
      <SettingDescription>Overview of your account.</SettingDescription>
      <SettingContent>
        <Suspense fallback={<ProfileSettingsSkeleton />}>
          <ProfileSettings />
        </Suspense>
      </SettingContent>
    </SettingCard>
  );
};

export default Page;
