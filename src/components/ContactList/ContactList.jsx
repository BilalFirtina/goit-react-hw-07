import { useEffect } from "react";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts } from "../../redux/contactsOps";
import style from "./ContactList.module.css"

const ContactList = () => {
  const items = useSelector((state) => state.operation.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error:{error}</p>;
  return (
    <ul className={style.container}>
      {items.length > 0 ? (
        items.map((contact) => {
          return <Contact key={contact.id} contact={contact} />;
        })
      ) : (
        <p>itemler boş</p>
      )}
    </ul>
  );
};

export default ContactList;
