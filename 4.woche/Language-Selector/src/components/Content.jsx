import React from "react";
import { useTranslation } from "react-i18next";

function Content() {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t("extra_content")}</p>
      <button>{t("button_text")}</button>
    </div>
  );
}

export default Content;
