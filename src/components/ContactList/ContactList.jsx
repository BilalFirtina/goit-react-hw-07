import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import style from "./ContactList.module.css";
import {
  selectVisibleContacts,
  selectError,
  selectLoading,
} from "../../redux/contactsSlice";
import { useEffect } from "react";
import { fetchTasks } from "../../redux/contactsOps";

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  const items = useSelector(selectVisibleContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error}</p>;
  return (
    <ul className={style.container}>
      {items.length > 0 ? (
        [...items].reverse().map((contact) => {
          return <Contact key={contact.id} contact={contact} />;
        })
      ) : (
        <h3 className={style.noContacts}>NO CONTACTS AVAILABLE</h3>
      )}
    </ul>
  );
};

export default ContactList;
