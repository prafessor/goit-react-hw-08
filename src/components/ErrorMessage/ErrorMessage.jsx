import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div className={css.wrapper}>
      <p className={css.title}>Oops something went wrong...</p>
      <p className={css.message}>Please reload the page</p>
    </div>
  );
}
