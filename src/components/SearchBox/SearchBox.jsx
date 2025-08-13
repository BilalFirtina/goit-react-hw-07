import { useDispatch, useSelector } from "react-redux";
import style from "./SearchBox.module.css";
import { selectFilters, setFilter } from "../../redux/filtersSlice";
function SearchBox() {
  const text = useSelector(selectFilters);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setFilter(e.target.value.trim().toLowerCase()));
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
