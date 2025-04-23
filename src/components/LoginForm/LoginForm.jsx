import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import css from "./LoginForm.module.css";

const initialValues = {
  email: "",
  password: "",
};

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("This filed is required"),
  password: Yup.string().required("This field is required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const formId = useId();

  const handleFormSubmit = (value) => {
    dispatch(login(value));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleFormSubmit}
    >
      <Form className={css.form}>
        <div className={css.input_wrapper}>
          <MdOutlineEmail className={css.icon} />
          <Field
            className={css.input}
            type="email"
            name="email"
            id={formId + "-email"}
          />
          <label className={css.label} htmlFor={formId + "-email"}>
            Email
          </label>
          <span className={css.err}>
            <ErrorMessage className={css.error} name="email" />
          </span>
        </div>
        <div className={css.input_wrapper}>
          <RiLockPasswordLine className={css.icon} />
          <Field
            className={css.input}
            type="password"
            name="password"
            id={formId + "-password"}
          />
          <label className={css.label} htmlFor={formId + "-password"}>
            Password
          </label>
          <span className={css.err}>
            <ErrorMessage className={css.error} name="password" />
          </span>
        </div>

        <button className={css.btn_submit} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
}
