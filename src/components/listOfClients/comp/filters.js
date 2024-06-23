import React, { useState, useEffect } from 'react';
import '../listOfClients.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddClientModal from './addClientModal';

const FiltersClients = () => {

    //модальное окно добавления клиента
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{ display: 'flex' }} className='my-4'>
            <Button variant="primary" onClick={handleShow} className='me-5 addClientButton'>Добавить клиента</Button>
            <AddClientModal show={show} handleClose={handleClose} />
        </div>
    )
}

export default FiltersClients;