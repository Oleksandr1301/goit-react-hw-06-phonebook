import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import { Item, DelButton } from './contactItem.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const { name, number, id } = contact;
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <Item>
      <span>{name}:</span>
      <span>{number}</span>
      <DelButton type="button" onClick={handleDelete}>
        Delete
      </DelButton>
    </Item>
  );
};


