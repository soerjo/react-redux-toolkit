import React, { useState } from "react";

type MyButtonProps = {
  children: React.ReactNode;
  handleButton: () => void;
};

const MyButton: React.FC<
  MyButtonProps & React.HtmlHTMLAttributes<HTMLButtonElement>
> = ({ children, handleButton, className }) => {
  const [effectButton, setEffectButton] = useState(false);
  return (
    <button
      className={`${effectButton && "animate-wiggle"} ${className}`}
      onClick={() => {
        setEffectButton(true);
        handleButton();
      }}
      onAnimationEnd={() => setEffectButton(false)}
    >
      {children}
    </button>
  );
};

export default MyButton;
