import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  const handleBtnClick = () => {
    dispatch(logout());
  };

  return (
    <div>
      <span className={css.name}>{userName}</span>
      <button className={css.btn} type="button" onClick={handleBtnClick}>
        Log out
      </button>
    </div>
  );
}
