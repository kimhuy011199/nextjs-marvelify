interface SettingCardProps {
  children: React.ReactNode;
}

const SettingCard: React.FC<SettingCardProps> = ({ children }) => {
  return (
    <div className="border border-gray-200 shadow-sm rounded-2xl bg-white w-full py-5 px-6">
      {children}
    </div>
  );
};

interface SettingHeadingProps {
  children: React.ReactNode;
}

const SettingHeading: React.FC<SettingHeadingProps> = ({ children }) => {
  return <h2 className="font-semibold text-lg">{children}</h2>;
};

interface SettingDescriptionProps {
  children: React.ReactNode;
}

const SettingDescription: React.FC<SettingDescriptionProps> = ({
  children,
}) => {
  return <p className="text-muted-foreground">{children}</p>;
};

interface SettingContentProps {
  children: React.ReactNode;
}

const SettingContent: React.FC<SettingContentProps> = ({ children }) => {
  return <div className="pt-6">{children}</div>;
};

export { SettingCard, SettingHeading, SettingDescription, SettingContent };
