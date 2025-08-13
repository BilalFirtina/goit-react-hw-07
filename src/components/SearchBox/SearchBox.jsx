import { useDispatch, useSelector } from "react-redux";
import style from "./SearchBox.module.css";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";
function SearchBox() {
  const text = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value.trim().toLowerCase()));
  };
  return (
    <div className={style.container}>
      <p className={style.p}>Find contacts by name</p>
      <input
        value={text}
        className={style.input}
        onChange={handleChange}
        type="text"
        placeholder="Arama Yapabilirsiniz."
      />
    </div>
  );
}

export default SearchBox;
