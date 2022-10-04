import { Suspense } from "react";

import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "../shared/lib/classNames/classNames";

import "./styles/index.scss";
import { Navbar } from "widgets/Navbar";
import { AppRouter } from "./providers/router";
import { Sidebar } from "widgets/Sidebar";
import { useTranslation } from "react-i18next";

const Component = () => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <div>
      <button onClick={toggle}>{t("Перевод")}</button>
      {t("Тестовый")}
    </div>
  );
};

export const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <Suspense fallback="">
        <Component />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
