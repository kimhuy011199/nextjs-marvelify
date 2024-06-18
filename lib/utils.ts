import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CHECKOUT_STEPS } from '@/lib/constants';
import { CheckoutType } from '@/lib/types';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const isValidCheckoutStep = (step: string) => {
  return Object.values(CHECKOUT_STEPS).includes(step);
};

export const getCheckoutStep = (
  checkoutState: CheckoutType,
  step: string = ''
) => {
  if (!isValidCheckoutStep(step) || step === CHECKOUT_STEPS.ADDRESS) {
    return CHECKOUT_STEPS.ADDRESS;
  } else if (step === CHECKOUT_STEPS.DELIVERY) {
    if (!checkoutState?.shippingAddress?.address1) {
      return CHECKOUT_STEPS.ADDRESS;
    }
    return CHECKOUT_STEPS.DELIVERY;
  } else if (step === CHECKOUT_STEPS.PAYMENT) {
    if (!checkoutState?.shippingAddress?.address1) {
      return CHECKOUT_STEPS.ADDRESS;
    } else if (!checkoutState?.deliveryMethod?.id) {
      return CHECKOUT_STEPS.DELIVERY;
    }
    return CHECKOUT_STEPS.PAYMENT;
  } else {
    return CHECKOUT_STEPS.ADDRESS;
  }
};

export const getRelatedCheckoutSteps = (currentStep: string) => {
  switch (currentStep) {
    case CHECKOUT_STEPS.ADDRESS:
      return {
        nextStep: CHECKOUT_STEPS.DELIVERY,
        prevStep: '',
      };
    case CHECKOUT_STEPS.DELIVERY:
      return {
        nextStep: CHECKOUT_STEPS.PAYMENT,
        prevStep: CHECKOUT_STEPS.ADDRESS,
      };
    case CHECKOUT_STEPS.PAYMENT:
      return {
        nextStep: '',
        prevStep: CHECKOUT_STEPS.DELIVERY,
      };
    default:
      return {
        nextStep: CHECKOUT_STEPS.DELIVERY,
        prevStep: '',
      };
  }
};

export const formatOrderDate = (date: string | Date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Sort query params by keys and values to use the cached page
export const sortQueryParams = (params: URLSearchParams) => {
  const sortedParamsArray = Array.from(params.entries()).sort((a, b) => {
    const keyCompare = a[0].localeCompare(b[0]);
    if (keyCompare !== 0) {
      return keyCompare; // Sort primarily by keys
    } else {
      return a[1].localeCompare(b[1]); // If keys are equal, sort by values
    }
  });
  const sortedParams = new URLSearchParams(sortedParamsArray);
  return sortedParams;
};

export const formatOrderNumber = (orderNumber: number) => {
  return '#' + orderNumber.toString().padStart(4, '0');
};
