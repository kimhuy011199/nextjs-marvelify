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
