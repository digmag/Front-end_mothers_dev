import React, { useState, useEffect } from 'react';
import '../listOfClients.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddClientModal from './addClientModal';
import { useDispatch, useSelector } from 'react-redux';
import t from '../../listOfContracts/images/Rectangle139.svg';
import f from '../../listOfContracts/images/Rectangle132.svg';
import Form from 'react-bootstrap/Form';
import { clientAPI } from '../../../API/clientAPI';

const FiltersClients = () => {


    const dispatch = useDispatch();
    //модальное окно добавления клиента
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const isAdmin = useSelector(state => state.userReducer.isAdmin);

    const [isLawSelected, setisLawSelected] = useState('');

    const handleSelectChange = (event) => {
        setisLawSelected(event.target.value);
    };

    const filterReq = () => {
        const isLaw = isLawSelected;
        const inn = document.getElementById('innSearchText').value;
        const name = document.getElementById('nameSearchText').value;
        const email = document.getElementById('emailSearchText').value;
        const ceoName = document.getElementById('ceoNameSearchText').value;

        // const params = {
        //     isLaw: isLaw,
        //     inn: inn,
        //     name: name,
        //     email: email,
        //     ceoName: ceoName
        // }

        // console.log(params)
        dispatch(clientAPI.getListOfClients(0, isLaw, inn, name, email, ceoName));
    }

    return (
        <div className='my-4 mx-5'>
            <div style={{ display: 'flex' }} >
                <div>
                    <Form.Select aria-label="faseSearch" controlId="faseSearch1" onChange={handleSelectChange} >
                        <option value="">Все лица</option>
                        <option value="LAW">Только юридические</option>
                        <option value="PHYSICAL">Только физические</option>
                    </Form.Select>
                </div>

                <Form.Group className="mb-3 ms-2" controlId="innSearchText">
                    {/* <Form.Label>ИНН</Form.Label> */}
                    <Form.Control placeholder='Введите ИНН' type="text" />
                </Form.Group>

                <Form.Group className="mb-3 ms-2" controlId="nameSearchText">
                    {/* <Form.Label>ИНН</Form.Label> */}
                    <Form.Control placeholder='Введите полное название' type="text" />
                </Form.Group>

                <Form.Group className="mb-3 ms-2" controlId="emailSearchText">
                    {/* <Form.Label>ИНН</Form.Label> */}
                    <Form.Control placeholder='Введите email' type="text" />
                </Form.Group>

                <Form.Group className="mb-3 ms-2" controlId="ceoNameSearchText">
                    {/* <Form.Label>ИНН</Form.Label> */}
                    <Form.Control placeholder='Введите ФИО руководителя' type="text" />
                </Form.Group>

                <div className="ms-2">
                    <Button variant="primary" onClick={filterReq}>Поиск</Button>
                </div>





            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={t} alt="t" />
                    <div style={{ color: '#90939A', margin: '1% 0 0 1vw', width: 100, fontSize: 'medium' }}>- юр лицо</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }} className='ms-4'>
                    <img src={f} alt="f" />
                    <div style={{ color: '#90939A', margin: '1% 0 0 1vw', width: 100, fontSize: 'medium' }}>- физ лицо</div>
                </div>
                <div className='addClientButton'>
                    {isAdmin && <Button variant="primary" onClick={handleShow} >Добавить клиента</Button>}
                    <AddClientModal show={show} handleClose={handleClose} />
                </div>
            </div>
        </div>

    )
}

export default FiltersClients;