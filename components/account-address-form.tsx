import React from 'react';

export enum FormType {
  Create = 'create',
  Update = 'update',
}

interface AccountAddressFormProps {
  type: FormType;
}

const AccountAddressForm: React.FC<AccountAddressFormProps> = ({ type }) => {
  return <div>AccountAddressForm {type}</div>;
};

export default AccountAddressForm;
