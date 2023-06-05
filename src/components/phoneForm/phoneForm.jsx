import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactSlice';
import { getContacts } from 'redux/selectors';
import { FormField, Form, ButtonSubmit } from './phoneForm.styled';

export const PhoneForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    if (contacts.find(el => el.name === name)) {
      alert(`${name} is alredy in contacts`);
      return;
    }
    dispatch(addContact(name, form.elements.number.value));
    form.reset();
  };

  return (
    <Form action="submit" onSubmit={handleSubmit}>
      <FormField htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          className="lable"
          required
        />
      </FormField>

      <FormField htmlFor="number">
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          className="lable"
          required
        />
      </FormField>
      <ButtonSubmit type="submit">Add contact</ButtonSubmit>
    </Form>
  );
};
