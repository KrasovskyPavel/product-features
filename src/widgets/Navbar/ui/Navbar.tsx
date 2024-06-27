import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import Modal from "shared/ui/Modal/Modal";
import { useCallback, useState } from "react";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation("translation");
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onToggleModal}>
        {t("Войти")}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque minima quaerat reiciendis
        maxime? Corporis non ea, delectus perferendis quidem iure, nulla esse accusantium ipsa
        temporibus sunt vitae saepe fugit at.
      </Modal>
    </div>
  );
};

export default Navbar;
