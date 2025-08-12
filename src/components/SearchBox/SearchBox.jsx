import style from "./SearchBox.module.css";
function SearchBox() {
  return (
    <div className={style.container}>
      <p className={style.p}>Find contacts by name</p>
      <input
        className={style.input}
        type="text"
        placeholder="Arama Yapabilirsiniz."
      />
    </div>
  );
}

export default SearchBox;
