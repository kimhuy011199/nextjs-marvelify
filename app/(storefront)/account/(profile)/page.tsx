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
import { redirect } from 'next/navigation';
import createServerClient from '@/lib/supabase/server';
import { ROUTES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Profile - Marvel Caseshop',
};

const Page: React.FC = async () => {
  const supabase = createServerClient();
  const { data } = await supabase.auth.getUser();
  if (!data?.user?.id) {
    redirect(ROUTES.LOGIN);
  }

  return (
    <SettingCard>
      <SettingHeading>Profile Settings</SettingHeading>
      <SettingDescription>Overview of your account.</SettingDescription>
      <SettingContent>
        <Suspense fallback={<ProfileSettingsSkeleton />}>
          <ProfileSettings userId={data.user.id} />
        </Suspense>
      </SettingContent>
    </SettingCard>
  );
};

export default Page;
