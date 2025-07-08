import React from "react";

import "./stylies.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, ...rest }) => {
  return (
    <>
      <button onClick={onClick} {...rest}>
        {text}
      </button>
    </>
  );
};

export default Button;
