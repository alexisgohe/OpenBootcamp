import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComp = ({ contact }) => {
    return (
        <div>
            <h3>
                Nombre: { contact.name }
            </h3>
            <h3>
                Apellido: { contact.lastName }
            </h3>
            <h3>
                Email: { contact.email }
            </h3>
            <h3>
                Conectado: { contact.connected ? 'En Línea':'No Disponible' }
            </h3>
        </div>
    );
};


ContactComp.propTypes = {
    task: PropTypes.instanceOf(Contact)
};


export default ContactComp;