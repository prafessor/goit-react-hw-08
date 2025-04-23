import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  // search function
  const handleChange = (evt) => {
    dispatch(changeFilter(evt.currentTarget.value));
  };

  // reset input function
  const handleResetClick = () => {
    dispatch(changeFilter(""));
  };

  return (
    <div className={css.wrapper}>
      <p className={css.title}>Find contacts by name</p>
      <div className={css.field_wrapper}>
        <input
          className={css.field}
          type="text"
          value={filterValue}
          onChange={handleChange}
        />
        <button className={css.btn_reset} onClick={handleResetClick}>
          Reset
        </button>
      </div>
    </div>
  );
}
