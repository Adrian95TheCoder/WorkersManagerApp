import "./Navigation.scss";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink className="nav__link" to={"/"} end>
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to={"/employees"} end>
            Employess list
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to={"/login"} end>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
