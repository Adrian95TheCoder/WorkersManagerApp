import { useContext } from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../components/context/UserContext";
import { useTranslation } from "react-i18next";

export const Navigation = () => {
  const { token } = useContext(UserContext);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <img src={"/assets/home.png"} alt="home icon" />
          <NavLink className="nav__link" to={"/"} end>
            {t("home")}
          </NavLink>
        </li>
        <li className="nav__item">
          <img src={"/assets/list.png"} alt="icon of employess list" />
          {token ? (
            <NavLink className="nav__link" to={"/employees"} end>
              {t("employeeList")}
            </NavLink>
          ) : (
            <button className="nav__inactive" disabled>
              {t("employeeList")}
            </button>
          )}
        </li>
        <li className="nav__item">
          <img src={"/assets/user.png"} alt="" />
          <NavLink className="nav__link" to={"/login"} end>
            {t("navLogin")}
          </NavLink>
        </li>
        <li className="nav__item-language">
          <img src={"/assets/language.png"} alt="icon of langauge select" />
          <button className="nav__item-language--btn" onClick={() => changeLanguage("en")}>{t("english")}</button>
          <button className="nav__item-language--btn"  onClick={() => changeLanguage("pl")}>{t("polish")}</button>
        </li>
      </ul>
    </nav>
  );
};
