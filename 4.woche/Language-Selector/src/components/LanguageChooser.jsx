
import { useTranslation } from "react-i18next";

export default function LanguageChooser() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <label htmlFor="language">{t("change_language")}:</label>
      <select
        id="language"
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="en">🇬🇧 English</option>
        <option value="tr">🇹🇷 Türkçe</option>
        <option value="de">🇩🇪 Deutsch</option>
      </select>
    </div>
  );
}
