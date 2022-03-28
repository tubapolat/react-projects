import './addContact.css';
import React, { useState } from 'react';

function AddContact(props) {
    const initialFormValue= { fullName: '', phoneNumber: '' }
    const [form, setForm] = useState(initialFormValue)
    const onInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (

        <div className='container'>
            <h1>
                Contacts
            </h1>
            <form onSubmit={(e) => {
                props.onSubmit(e, form)
                setForm(initialFormValue);
            }

        }>
                <div>
                    <input className='width-300 mb-3' name='fullName' placeholder='Full name' value={form.fullName} onChange={onInputChange} />
                </div>
                <div>
                    <input className='width-300 mb-3'name='phoneNumber' placeholder='Phone number' value={form.phoneNumber} onChange={onInputChange} />
                </div>
                <div>
                    <button class="btn btn-primary ">Add</button>
                </div>
            </form>

        </div>

    );
}

export default AddContact;