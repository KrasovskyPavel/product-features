import { classNames } from "shared/lib/classNames/classNames";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { SidebarItemType } from "../../../model/items";
import cls from "./SideBarItem.module.scss";

interface SideBarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SideBarItem = memo(({ item, collapsed }: SideBarItemProps) => {
  const { t } = useTranslation("translation");

  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      to={item.path}
      theme={AppLinkTheme.SECONDARY}
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
    >
      <item.Icon className={classNames(cls.icon)} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
});

export default SideBarItem;
