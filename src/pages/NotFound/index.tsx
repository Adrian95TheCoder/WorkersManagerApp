import { useTranslation } from "react-i18next";
import "./NotFound.scss";
import { Link } from "react-router-dom";

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <>
      <body className="Not_Found_Body">
        <h2 className="Not_Found_Error">404</h2>
        <p className="Not_Found_Paragraph">{t("pageNotFound")}</p>
        <p className="Not_Found_Paragraph">{t("pageNotFoundInfo")}</p>
        <button className="Not_Found__Button">
          <Link to="/" className="Not_Found_Link">
            {t("goToMainPage")}
          </Link>
        </button>
      </body>
    </>
  );
};
