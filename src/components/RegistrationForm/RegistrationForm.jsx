import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { BsPersonFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

const registrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be longer than 3 letters")
    .max(50, "Name can`t be longer than 50 letters")
    .required("This field is required"),
  email: Yup.string().email("Invalid email").required("This field is required"),
  password: Yup.string()
    .min(6, "Password must be longer than 6 letters")
    .max(25, "Name can`t be longer than 25 letters")
    .required("This field is required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const formId = useId();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleFormSubmit = (value, action) => {
    dispatch(register(value));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registrationSchema}
      onSubmit={handleFormSubmit}
    >
      <Form className={css.form}>
        <div className={css.input_wrapper}>
          <BsPersonFill className={css.icon} />
          <Field
            className={css.input}
            type="text"
            name="name"
            id={formId + "-name"}
          />
          <label className={css.label} htmlFor={formId + "-name"}>
            Name
          </label>
          <span className={css.err}>
            <ErrorMessage className={css.error} name="name" />
          </span>
        </div>

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
          Register
        </button>
      </Form>
    </Formik>
  );
}
