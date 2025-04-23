import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <section className={css.section}>
      <h1 className={css.title}>
        Welcome to PhoneBook — your simple and secure contact manager
      </h1>
      <Link className={css.link} to="/contacts">
        Add your first contact
      </Link>
    </section>
  );
}
