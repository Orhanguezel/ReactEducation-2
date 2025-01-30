import React from "react";
import { useTranslation } from "react-i18next";

export default function WelcomeMessage() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t("welcome")}</h2>
      <p>{t("description")}</p>
    </div>
  );
}
