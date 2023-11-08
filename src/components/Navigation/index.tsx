import { useContext } from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../components/context/UserContext";

export const Navigation = () => {
  const { token } = useContext(UserContext);

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
            <button className="nav__inactive" disabled>Employess list</button>
          )}
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
