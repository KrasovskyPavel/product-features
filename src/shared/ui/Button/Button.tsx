import { classNames } from "shared/lib/classNames/classNames";
import React, { ButtonHTMLAttributes } from "react";
import cls from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = (props) => {
  // eslint-disable-next-line object-curly-newline
  const { className, children, square, size = ButtonSize.M, theme, ...otherProps } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [cls[theme], cls[size], className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
