import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ page, redirect }) {
  const isLogged = useSelector(selectIsLoggedIn);

  return isLogged ? page : <Navigate to={redirect} />;
}
