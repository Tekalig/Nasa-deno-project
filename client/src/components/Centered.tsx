import React from "react";

interface CenteredProps {
  className?: string;
  children: React.ReactNode;
}

const Centered: React.FC<CenteredProps> = ({ className, children,  }: CenteredProps) => {
  return (
    <div className={`${className} max-w-2xl max-md:w-full mx-auto`}>
      {children}
    </div>
  );
};

export default Centered;
