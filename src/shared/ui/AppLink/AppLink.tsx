import { classNames } from "shared/lib/classNames/classNames";
import { Link, LinkProps } from "react-router-dom";
import React, { memo, ReactNode } from "react";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
  const { to, children, className, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;
  return (
    <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </Link>
  );
});

export default AppLink;
