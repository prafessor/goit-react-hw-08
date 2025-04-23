import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";
import { Routes, Route } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import HomePage from "../../pages/HomePage/HomePage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import css from "./App.module.css";
import AppBar from "../AppBar/AppBar";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <MoonLoader className={css.loader} />
  ) : (
    <>
      <AppBar />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                page={<RegistrationPage />}
                redirect="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute page={<LoginPage />} redirect="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={<PrivateRoute page={<ContactsPage />} redirect="/login" />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
