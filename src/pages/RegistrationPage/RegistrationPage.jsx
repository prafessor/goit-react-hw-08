import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <section className={css.section}>
      <div className={css.wrapper}>
        <h1 className={css.title}>Registration</h1>
        <RegistrationForm />
      </div>
    </section>
  );
}
