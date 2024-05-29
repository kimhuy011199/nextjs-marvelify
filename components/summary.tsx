import { twMerge } from 'tailwind-merge';

interface SummaryCardProps {
  children: React.ReactNode;
  className?: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        'p-5 border border-accent rounded-2xl bg-white',
        className
      )}
    >
      {children}
    </div>
  );
};

interface SummaryHeadingProps {
  children: React.ReactNode;
}

const SummaryHeading: React.FC<SummaryHeadingProps> = ({ children }) => {
  return <h3 className="text-lg font-semibold mb-4">{children}</h3>;
};

interface SummaryContentProps {
  children: React.ReactNode;
}

const SummaryContent: React.FC<SummaryContentProps> = ({ children }) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

interface SummaryLineProps {
  children: React.ReactNode;
}

const SummaryLine: React.FC<SummaryLineProps> = ({ children }) => {
  return <div className="flex justify-between">{children}</div>;
};

interface SummaryTextProps {
  children: React.ReactNode;
  className?: string;
}

const SummaryText: React.FC<SummaryTextProps> = ({ children, className }) => {
  return (
    <div className={twMerge('text-accent-foreground', className)}>
      {children}
    </div>
  );
};

export {
  SummaryCard,
  SummaryHeading,
  SummaryContent,
  SummaryLine,
  SummaryText,
};
