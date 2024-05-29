interface CheckoutStepCardProps {
  children: React.ReactNode;
}

const CheckoutStepCard: React.FC<CheckoutStepCardProps> = ({ children }) => {
  return <div className="">{children}</div>;
};

interface CheckoutStepHeadingProps {
  children: React.ReactNode;
}

const CheckoutStepHeading: React.FC<CheckoutStepHeadingProps> = ({
  children,
}) => {
  return <h2 className="font-semibold text-xl pb-1">{children}</h2>;
};

interface CheckoutStepDescriptionProps {
  children: React.ReactNode;
}

const CheckoutStepDescription: React.FC<CheckoutStepDescriptionProps> = ({
  children,
}) => {
  return <p className="text-accent-foreground">{children}</p>;
};

interface CheckoutStepContentProps {
  children: React.ReactNode;
}

const CheckoutStepContent: React.FC<CheckoutStepContentProps> = ({
  children,
}) => {
  return <div className="pt-5">{children}</div>;
};

export {
  CheckoutStepCard,
  CheckoutStepHeading,
  CheckoutStepDescription,
  CheckoutStepContent,
};
