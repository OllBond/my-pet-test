import { NavLink } from "react-router-dom";
import css from "./navbar.module.css";

const NavBar = () => {
  return (
    <div className={css.navbar}>
      <NavLink to="/" className={css.titleHome}>
        Home
      </NavLink>
    </div>
  );
};
export default NavBar;
