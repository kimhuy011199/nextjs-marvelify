import React from 'react';

interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className }) => {
  return (
    <div className={className}>
      <hr className="border-t border-accent" />
    </div>
  );
};

export default Divider;
