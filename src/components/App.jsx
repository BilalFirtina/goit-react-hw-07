import ContactForm from "./ContactForm/ContactForm";
import "./App.css";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";

function App() {
  return (
    <div className="container">
      <h1>
        <span>P</span>
        <span>h</span>
        <span>o</span>
        <span>n</span>
        <span>e</span>
        <span>B</span>
        <span>o</span>
        <span>o</span>
        <span>k</span>
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
