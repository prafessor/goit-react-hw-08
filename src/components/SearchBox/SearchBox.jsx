import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const [isReset, setIsReset] = useState(false);
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  // search function
  const handleChange = (evt) => {
    if (evt.currentTarget.value.length > 0) {
      setIsReset(true);
    } else {
      setIsReset(false);
    }
    dispatch(changeFilter(evt.currentTarget.value));
  };

  // reset input function
  const handleResetClick = () => {
    dispatch(changeFilter(""));
    setIsReset(false);
  };

  return (
    <div className={css.field_wrapper}>
      <IoIosSearch className={css.icon_search} size="20" />
      <input
        className={css.field}
        type="text"
        value={filterValue}
        onChange={handleChange}
        placeholder="Search"
      />
      {isReset && (
        <button className={css.btn_reset} onClick={handleResetClick}>
          <MdClose className={css.icon_reset} size="20" />
        </button>
      )}
    </div>
  );
}
