'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/lib/constants';
import { getRelatedCheckoutSteps } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface CheckoutSubmitActionProps {
  currentStep: string;
  isLoading?: boolean;
  isDisabled?: boolean;
}

const CheckoutSubmitAction: React.FC<CheckoutSubmitActionProps> = ({
  currentStep,
  isLoading,
  isDisabled,
}) => {
  const router = useRouter();
  const relatedCheckoutSteps = getRelatedCheckoutSteps(currentStep);
  const { prevStep, nextStep } = relatedCheckoutSteps;
  const previousStepLabel = 'Back to ' + (prevStep || 'cart');
  const nextStepLabel = nextStep ? 'Continue to ' + nextStep : 'Place order';

  const handleNavigatePrevStep = () => {
    if (!prevStep) {
      router.push(ROUTES.CART);
      return;
    }
    router.push(`${ROUTES.CHECKOUT}?step=${prevStep}`);
  };

  return (
    <div className="flex justify-between mt-4">
      <Button
        variant="link"
        onClick={handleNavigatePrevStep}
        className="px-0 text-foreground underline"
        type="button"
        disabled={isDisabled}
      >
        {previousStepLabel}
      </Button>
      <Button
        type="submit"
        isLoading={isLoading}
        disabled={isDisabled}
        className="min-w-40"
      >
        {nextStepLabel}
      </Button>
    </div>
  );
};

export default CheckoutSubmitAction;
