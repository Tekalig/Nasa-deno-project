import React, { MouseEvent } from "react";

interface ClickableProps {
  children: React.ReactNode;
  sounds: {
    click?: {
      play: () => void;
    };
  };
  onClick?: (e: MouseEvent<HTMLSpanElement>) => void;
  className?: string;
  [key: string]: unknown;
}

const Clickable: React.FC<ClickableProps> = (props: ClickableProps) => {
  const {
    children,
    onClick,
    className,
    ...rest
  } = props;

  const clickWithSound = (e: MouseEvent<HTMLSpanElement>) => {
    onClick && onClick(e);
  };

  return (
    <span {...rest} onClick={clickWithSound} className={`cursor-pointer ${className}`}>
      {children}
    </span>
  );
};

export default Clickable;
