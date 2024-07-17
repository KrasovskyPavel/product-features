import { classNames } from "shared/lib/classNames/classNames";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getProfileReadonly, profileActions, updateProfileData } from "entities/Profile";
import { useCallback } from "react";
import cls from "./ProfilePageHeader.module.scss";

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation("profile");

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t("Профиль")} />
      {readonly ? (
        <Button className={cls.editBtn} onClick={onEdit} theme={ButtonTheme.OUTLINE}>
          {t("Редактировать")}
        </Button>
      ) : (
        <>
          <Button className={cls.editBtn} onClick={onCancelEdit} theme={ButtonTheme.OUTLINE_RED}>
            {t("Отменить")}
          </Button>
          <Button onClick={onSave} theme={ButtonTheme.OUTLINE}>
            {t("Принять")}
          </Button>
        </>
      )}
    </div>
  );
};

export default ProfilePageHeader;
