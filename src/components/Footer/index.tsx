import { useTranslation } from "react-i18next";
import "./Footer.scss";
export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="Footer__block"></div>
      <div className="Footer__div">
        <p className="Footer__title">{t("websiteCreatedBy")}</p>
        <p className="Footer__p">Adam, Adrian, Artur, Kacper, Michał</p>
      </div>
    </footer>
  );
};
