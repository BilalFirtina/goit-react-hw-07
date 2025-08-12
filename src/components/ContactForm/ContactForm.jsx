import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as yup from "yup";
import style from "./ContactForm.module.css";

function ContactForm() {
  const nameId = nanoid();
  const numberId = nanoid();
  const initialValues = {
    name: "",
    number: "",
  };
  const validationSchema = yup.object({
    name: yup
      .string()
      .min(3, "Name must be at least 3 characters")
      .max(25, "Name must be at most 3 characters")
      .required("Name is required"),
    number: yup
      .string()
      .min(3, "Name must be at least 3 characters")
      .max(25, "Name must be at most 3 characters")
      .required("Number is required"),
  });
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      <Form className={style.form}>
        <label htmlFor={nameId}>Name</label>
        <Field id={nameId} name="name"></Field>
        <ErrorMessage
          component="span"
          className={style.error}
          name="name"
        ></ErrorMessage>
        <label htmlFor={numberId}>Number</label>
        <Field id={numberId} name="number"></Field>
        <ErrorMessage
          component="span"
          className={style.error}
          name="number"
        ></ErrorMessage>
        <button className={style.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
