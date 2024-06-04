import { AddressType } from '@/lib/types';
import delay from 'delay';

const exampleAddresses: AddressType[] = [
  {
    id: '1',
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
    id: '2',
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

const getAddresses = async () => {
  await delay(2000);
  return exampleAddresses;
};

export { getExampleAddress, getAddresses };
