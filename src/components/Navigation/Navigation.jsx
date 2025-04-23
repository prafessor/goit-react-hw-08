import clsx from "clsx";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";

const getLinkStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <ul className={css.list}>
      <li>
        <NavLink className={getLinkStyles} to="/">
          Home
        </NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink className={getLinkStyles} to="/contacts">
            Contacts
          </NavLink>
        </li>
      )}
    </ul>
  );
}
