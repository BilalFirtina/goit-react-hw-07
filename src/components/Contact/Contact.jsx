import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import style from "./Contact.module.css";
import { useDispatch } from "react-redux";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {};
  return (
    <li className={style.card}>
      <div className={style.cardDiv}>
        <span>
          <IoPerson className={style.span} />
          {contact.name}
        </span>
        <span>
          <FaPhone className={style.span} />
          {contact.number}
        </span>
      </div>
      <div>
        <button className={style.button} onClick={() => handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
