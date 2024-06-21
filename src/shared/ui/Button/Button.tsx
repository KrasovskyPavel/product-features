import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import React, { ButtonHTMLAttributes } from "react";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button
      className={classNames(cls.Button, {}, [cls[theme], className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
