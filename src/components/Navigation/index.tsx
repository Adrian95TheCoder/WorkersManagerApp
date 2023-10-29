import { NavLink } from "react-router-dom"

export const Navigation = () =>{
    return(
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink to={"/"} end>Home</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to={"/employees"} end>Employess list</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to={"/employees/:id"} end>Employee details</NavLink>
                </li>
            </ul>
        </nav>
    )
}