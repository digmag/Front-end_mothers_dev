import React, { useState, useEffect } from 'react';
import '../listOfClients.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddClientModal from './addClientModal';
import { useSelector } from 'react-redux';

const FiltersClients = () => {

    //модальное окно добавления клиента
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const isAdmin = useSelector(state => state.userReducer.isAdmin);

    return (
        <div style={{ display: 'flex' }} className='my-4'>
            {isAdmin && <Button variant="primary" onClick={handleShow} className='me-5 addClientButton'>Добавить клиента</Button>}
            <AddClientModal show={show} handleClose={handleClose} />
        </div>
    )
}

export default FiltersClients;