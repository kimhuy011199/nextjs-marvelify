interface SettingCardProps {
  children: React.ReactNode;
}

const SettingCard: React.FC<SettingCardProps> = ({ children }) => {
  return <div className="">{children}</div>;
};

interface SettingHeadingProps {
  children: React.ReactNode;
}

const SettingHeading: React.FC<SettingHeadingProps> = ({ children }) => {
  return <h2 className="font-semibold text-2xl pb-1">{children}</h2>;
};

interface SettingDescriptionProps {
  children: React.ReactNode;
}

const SettingDescription: React.FC<SettingDescriptionProps> = ({
  children,
}) => {
  return <p className="text-accent-foreground">{children}</p>;
};

interface SettingContentProps {
  children: React.ReactNode;
}

const SettingContent: React.FC<SettingContentProps> = ({ children }) => {
  return <div className="pt-6">{children}</div>;
};

export { SettingCard, SettingHeading, SettingDescription, SettingContent };
