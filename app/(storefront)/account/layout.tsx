import React from 'react';
import AccountSidebar from '@/components/account-sidebar';
import Container from '@/components/container';

interface Props {
  children: React.ReactNode;
}

const AccountSettingLayout: React.FC<Props> = ({ children }) => {
  return (
    <section className="bg-gray-50 py-10">
      <Container>
        <div className="flex gap-16">
          <AccountSidebar />
          <div className="w-full">{children}</div>
        </div>
      </Container>
    </section>
  );
};

export default AccountSettingLayout;
