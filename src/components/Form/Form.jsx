// import { Component } from 'react';
import { Box } from 'components/Box';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

export const ContactForm = ({ onSubmit }) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().min(10).max(13).required(),
  });

  const initialValues = { name: '', number: '' };

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
            <Field type="tel" name="number" />
            <ErrorMessage name="number" component="div" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </Box>
  );
};

// export class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({ id: nanoid(), [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);

//     e.target.elements.name.value = '';
//     e.target.elements.number.value = '';
//   };

//   render() {
//     return (
//       <Box>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name
//             <input
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               onChange={this.handleChange}
//             />
//           </label>
//           <label>
//             Phone
//             <input
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               onChange={this.handleChange}
//             />
//           </label>
//           <button type="submit">Add contact</button>
//         </form>
//       </Box>
//     );
//   }
// }
