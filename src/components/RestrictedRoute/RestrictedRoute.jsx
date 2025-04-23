import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function RestrictedRoute({ page, redirect }) {
  const isLogged = useSelector(selectIsLoggedIn);

  return isLogged ? <Navigate to={redirect} /> : page;
}
