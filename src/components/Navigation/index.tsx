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
          <NavLink className="nav__link" to={"/"} end>
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          {token ? (
            <NavLink className="nav__link" to={"/employees"} end>
              Employess list
            </NavLink>
          ) : (
            <button className="nav__inactive" disabled>
              Employess list
            </button>
          )}
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to={"/login"} end>
            Login
          </NavLink>
        </li>
        <li>
          <button onClick={() => changeLanguage("en")}>{t("english")}</button>
          <button onClick={() => changeLanguage("pl")}>{t("polish")}</button>
        </li>
      </ul>
    </nav>
  );
};
