// import { Component } from 'react';
import { Box } from 'components/Box';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

export const ContactForm = ({ onSubmit }) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().min(10).max(13).required(),
  });

  const initialValues = { name: '', phone: '' };

  const handleSubmit = (values, { resetForm }) => {
    const contact = { id: nanoid(), ...values };
    resetForm();

    onSubmit(contact);
  };

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <label>
            Name
            <Field type="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </label>
          <label>
            Phone
            <Field type="tel" name="phone" />
            <ErrorMessage name="phone" component="div" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </Box>
  );
};
