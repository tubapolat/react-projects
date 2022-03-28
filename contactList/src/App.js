import { useState } from 'react';
import './App.css';
import AddContact from './component/Form/addContact';
import ContactList from './component/List/contactList';


function App() {

  const [contacts, setContacts] = useState(
    [
      {fullName:'Tuba', phoneNumber:'12345'},
      {fullName:'Sedat', phoneNumber:'1658669'},
      {fullName:'Nova', phoneNumber:'56089'},
    ]);

  const onSubmit = (e, contact) => {
    e.preventDefault();
    if (contact.fullName === '' || contact.phoneNumber === '') {
      return;
    }
    setContacts([...contacts, contact])
  }
  return (
    <div className='App' >
      <AddContact onSubmit={onSubmit} />
      <ContactList contacts= {contacts}/>
      
    </div>

  );
}

export default App;