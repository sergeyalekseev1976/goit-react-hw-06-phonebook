import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, Title, Notification } from './App.styled';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux/es/exports';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      {contacts.length ? (
        <div>
          <Filter />
          <ContactList />
        </div>
      ) : (
        <Notification>No contacts in phonebook</Notification>
      )}
    </Container>
  );
};
