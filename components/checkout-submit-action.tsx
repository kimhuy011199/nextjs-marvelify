'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/lib/constants';
import { getRelatedCheckoutSteps } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface CheckoutSubmitActionProps {
  currentStep: string;
  callback: () => void;
}

const CheckoutSubmitAction: React.FC<CheckoutSubmitActionProps> = ({
  currentStep,
  callback,
}) => {
  const router = useRouter();
  const relatedCheckoutSteps = getRelatedCheckoutSteps(currentStep);

  const handleNavigateNextStep = () => {
    const nextStep = relatedCheckoutSteps.nextStep;
    router.push(`${ROUTES.CHECKOUT}?step=${nextStep}`);
  };

  const handleNavigatePrevStep = () => {
    const prevStep = relatedCheckoutSteps.prevStep;
    router.push(`${ROUTES.CHECKOUT}?step=${prevStep}`);
  };

  const handleSubmit = async () => {
    console.log('Submit');
    callback();
    // handleNavigateNextStep();
  };

  return (
    <div className="flex justify-between mt-4">
      <Button
        variant="link"
        onClick={handleNavigatePrevStep}
        className="px-0 text-foreground underline"
        type="button"
      >
        Back
      </Button>
      <Button type="button" onClick={handleSubmit}>
        Next step
      </Button>
    </div>
  );
};

export default CheckoutSubmitAction;
