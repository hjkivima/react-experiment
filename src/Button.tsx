import React, { forwardRef } from "react";

import "./Button.scss";

export type ButtonRefType = HTMLButtonElement;

type Props = {
  onClick: (e: React.SyntheticEvent) => void;
  style?: React.CSSProperties;
  name?: string;
  text?: string;
  className?: string;
  disabled?: boolean;
  ref?: ButtonRefType;
};

const Button = forwardRef<ButtonRefType, Props>(
  (
    {
      onClick,
      style,
      name = "",
      text = "Proceed",
      disabled = false,
      className = "",
    },
    ref
  ) => {
    return (
      <button
        className={`button ${className}`}
        onClick={onClick}
        disabled={disabled}
        name={name}
        style={style}
        data-text={text}
        ref={ref}>
        {text}
      </button>
    );
  }
);

export default Button;
