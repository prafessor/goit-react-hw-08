import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";
import { Link } from "react-router-dom";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Navigation />
        <Link className={css.logo} to="/">
          Phonebook
        </Link>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
}
