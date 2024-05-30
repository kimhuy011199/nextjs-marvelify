import { AddressType } from '@/lib/types';

const exampleAddresses: AddressType[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    address1: '123 Main St',
    address2: 'Apt 4B',
    city: 'New York',
    province: 'NY',
    postalCode: '10001',
    country: 'US',
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    address1: '456 Elm St',
    address2: '',
    city: 'Los Angeles',
    province: '',
    postalCode: '90001',
    country: 'US',
  },
];

const getExampleAddress = () => {
  const randomIndex = Math.floor(Math.random() * exampleAddresses.length);
  return exampleAddresses[randomIndex];
};

export { getExampleAddress };
