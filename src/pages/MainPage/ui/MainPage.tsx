import { Couter } from "entities/Counter";
import React from "react";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation("main");
  return (
    <div>
      {t("Главная страница")}
      <Couter />
    </div>
  );
};

export default MainPage;
