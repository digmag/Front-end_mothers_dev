import React, { useState, useEffect } from 'react';
import '../listOfClients.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddClientModal from './addClientModal';
import { useSelector } from 'react-redux';
import t from '../../listOfContracts/images/Rectangle139.svg';
import f from '../../listOfContracts/images/Rectangle132.svg'

const FiltersClients = () => {

    //модальное окно добавления клиента
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const isAdmin = useSelector(state => state.userReducer.isAdmin);

    return (
        <div style={{ display: 'flex' }} className='my-4 mx-5'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={t} alt="t" />
                <div style={{ color: '#90939A', margin: '1% 0 0 1vw', width: 100, fontSize: 'medium' }}>- юр лицо</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={f} alt="f" />
                <div style={{ color: '#90939A', margin: '1% 0 0 1vw', width: 100, fontSize: 'medium' }}>- физ лицо</div>
            </div>

            {isAdmin && <Button variant="primary" onClick={handleShow} className='addClientButton'>Добавить клиента</Button>}
            <AddClientModal show={show} handleClose={handleClose} />
        </div>
    )
}

export default FiltersClients;