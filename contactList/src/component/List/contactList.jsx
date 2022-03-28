import './contact.css'
import React, { useState } from 'react';
import Contact from './contact';

function ContactList(props) {
    const [searchText, setSearchText] = useState('');
    const foundContacts = props.contacts.filter(contact => Object.values(contact).some(value => value.toString().toLowerCase().includes(searchText.toLowerCase())))
    return (
        <div className='listContainer'>

            <input className='search' placeholder='search' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <ul class="list-group " style={{width:'300px'}}>
                {
                    foundContacts.map((contact, i) => <Contact key={i} name={contact.fullName} phoneNumber={contact.phoneNumber} />)
                }
                </ul>
        </div>
    );
}

export default ContactList;