import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComp from '../pure/forms/contact';

const ContactListComponent = () => {

    const contactInfo = new Contact('Alexis', 'Gómez', 'alexisgh74@gmail.com', true)

    return (
        <div>
            <div>
                <h1>Contacto</h1>
            </div>
            <div>
                <ContactComp contact={contactInfo}></ContactComp>
            </div>
        </div>
    );
};

export default ContactListComponent;