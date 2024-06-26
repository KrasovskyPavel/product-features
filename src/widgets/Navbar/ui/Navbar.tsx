import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation("translation");
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}></div>
    </div>
  );
};

export default Navbar;
