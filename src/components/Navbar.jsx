import { NavLink } from "react-router-dom";
import { links } from "./utils";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav__menu">
        <ul className="nav__list">
          {links.map((link) => {
            const { id, title, path, icon } = link;
            return (
              <li className="nav__item" key={id}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav__link active__link" : "nav__link"
                  }
                >
                  <span className="nav__icon">{icon}</span>
                  <h3 className="nav__title">{title}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
