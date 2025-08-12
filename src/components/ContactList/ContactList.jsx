import { useEffect } from "react";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts } from "../../redux/contactsOps";

const ContactList = () => {
  const { items, loading, error } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error}</p>;
  return (
    <ul>
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
