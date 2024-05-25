import React from 'react';
import {
  SettingCard,
  SettingContent,
  SettingDescription,
  SettingHeading,
} from '@/components/settings';

const Page: React.FC = () => {
  return (
    <SettingCard>
      <SettingHeading>Profile Settings</SettingHeading>
      <SettingDescription>
        View and update your profile information, including your name, email,
        and phone number.
      </SettingDescription>
      <SettingContent>Account settings page</SettingContent>
    </SettingCard>
  );
};

export default Page;
