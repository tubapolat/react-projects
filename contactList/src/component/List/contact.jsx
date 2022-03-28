import React from 'react';
import PropTypes from 'prop-types';

function Contact(props) {
    return (
        <li class="list-group-item d-flex justify-content-between align-items-center">
            
                {props.name}

            <span class="badge bg-primary">
                {props.phoneNumber}
            </span>
        </li>

    );
}

export default Contact;