import { classNames } from "shared/lib/classNames/classNames";
import React, { ButtonHTMLAttributes } from "react";
import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: React.FC<ButtonProps> = (props) => {
  // eslint-disable-next-line object-curly-newline
  const { className, children, theme, ...otherProps } = props;

  return (
    <button
      type="button"
      className={classNames(cls.Button, {}, [cls[theme], className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
