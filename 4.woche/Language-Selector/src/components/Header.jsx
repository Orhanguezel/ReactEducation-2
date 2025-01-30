import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  return (
    <header>
      <h1>{t("header_title")}</h1>
      <nav>
        <button onClick={() => i18n.changeLanguage("en")}>🇬🇧 English</button>
        <button onClick={() => i18n.changeLanguage("tr")}>🇹🇷 Türkçe</button>
        <button onClick={() => i18n.changeLanguage("de")}>🇩🇪 Deutsch</button>
      </nav>
    </header>
  );
}

export default Header;

