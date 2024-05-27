import { twMerge } from 'tailwind-merge';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return <div className={twMerge('py-16', className)}>{children}</div>;
};

interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={twMerge('flex items-center justify-between py-5', className)}
    >
      {children}
    </div>
  );
};

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  className,
}) => {
  return (
    <h2 className={twMerge('text-2xl font-semibold', className)}>{children}</h2>
  );
};

export { Section, SectionHeader, SectionHeading };
