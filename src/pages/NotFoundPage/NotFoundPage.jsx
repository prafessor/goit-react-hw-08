import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className={css.container}>
      <h1 className={css.error}>Error 404</h1>
      <p className={css.title}>This page not found</p>
      <p className={css.message}>
        You will automatically be taken to the home page
      </p>
    </div>
  );
}
