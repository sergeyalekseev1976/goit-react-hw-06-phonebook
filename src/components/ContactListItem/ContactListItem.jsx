import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { GoPerson } from 'react-icons/go';
import { Item, ContactText, ButtonContact } from './ContactListItem.styled';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <Item>
      <GoPerson />
      <ContactText>
        {name}: {number}
      </ContactText>
      <ButtonContact onClick={handleDelete}>Delete</ButtonContact>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
