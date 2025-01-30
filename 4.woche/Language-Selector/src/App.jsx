import React from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import WelcomeMessage from "./components/WelcomeMessage";
import Content from "./components/Content";
import LanguageChooser from "./components/LanguageChooser";
import "./i18n"; // Çeviri ayarlarını içe aktarıyoruz

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Header />
      <LanguageChooser />
      <WelcomeMessage />
      <Content />
      <footer>
        <p>{t("footer_message")}</p>
      </footer>
    </div>
  );
}

export default App;

