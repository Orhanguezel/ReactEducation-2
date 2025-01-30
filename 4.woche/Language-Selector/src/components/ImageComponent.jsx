
import { useTranslation } from "react-i18next";

function ImageComponent() {
  const { i18n, t } = useTranslation();

  const images = {
    en: "/images/placeholder_en.png",
    tr: "/images/placeholder_tr.png",
    de: "/images/placeholder_de.png",
  };

  return (
    <div>
      <img src={images[i18n.language]} alt={t("image_alt")} width="300" />
    </div>
  );
}

export default ImageComponent;
