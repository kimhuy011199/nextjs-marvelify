import React from 'react';
import ArrowLink from '@/components/arrow-link';
import { ROUTES } from '@/lib/constants';
import LogoutButton from '@/components/authentication/logout-button';
import { getProfileByUserId } from '@/lib/data/users';

interface ProfileSettingsProps {
  userId: string;
}

const ProfileSettings: React.FC<ProfileSettingsProps> = async ({ userId }) => {
  const { profile, ordersNumber, addressesNumber } = await getProfileByUserId(
    userId
  );

  return (
    <>
      <div className="flex gap-2 mb-3">
        <span className="text-accent-foreground">Logged in as:</span>
        <span className="font-medium">{profile?.email}</span>
      </div>
      <div className="flex justify-between gap-2 mb-3">
        <div className="flex gap-2">
          <span className="text-accent-foreground">Saved addresses:</span>
          <span>{addressesNumber}</span>
        </div>
        <ArrowLink href={ROUTES.ACCOUNT_ADDRESSES} label="View addresses" />
      </div>
      <div className="flex justify-between gap-2 mb-3">
        <div className="flex gap-2">
          <span className="text-accent-foreground">Placed orders:</span>
          <span>{ordersNumber}</span>
        </div>
        <ArrowLink href={ROUTES.ACCOUNT_ORDERS} label="View orders" />
      </div>
      <div className="flex mt-5">
        <LogoutButton />
      </div>
    </>
  );
};

export default ProfileSettings;
