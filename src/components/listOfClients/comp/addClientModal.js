import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { clientAPI } from '../../../API/clientAPI';


const AddClientModal = ({ show, handleClose }) => {

    const dispatch = useDispatch();

    const [isClientType, setIsClientType] = useState(false); // Состояние для отслеживания выбора чекбокса 

    const handleCheckboxChange = (event) => {
        setIsClientType(event.target.checked);
    }// Устанавливаем состояние в соответствии с выбором чекбокса

    useEffect(() => {
        dispatch(clientAPI.getBicId());
    }, [])
    const bicList = useSelector(state => state.clientReducer.bic);
    console.log("что мы смогли получить в бик ", bicList);

    const [bicId, setBicId] = useState('');

    const addClient = () => {
        const clientType = isClientType;
        const bicIdd = bicId;
        const inn = document.getElementById('innText').value;
        const opf = document.getElementById('opfText').value;
        const cpp = document.getElementById('cppText').value;
        const fullName = document.getElementById('fullNameText').value;
        const shortName = document.getElementById('shortNameText').value;
        const ceoFullName = document.getElementById('ceoFullNameText').value;
        const ceoStatus = document.getElementById('ceoStatusText').value;
        const address = document.getElementById('addressText').value;
        const phone = document.getElementById('phoneText').value;
        const email = document.getElementById('emailText').value;
        const comment = document.getElementById('commentText').value;
        const requestBody = {
            "clientType": clientType,
            "bicId": bicIdd,
            "inn": inn,
            "opf": opf,
            "cpp": cpp,
            "fullName": fullName,
            "shortName": shortName,
            "ceoFullName": ceoFullName,
            "ceoStatus": ceoStatus,
            "address": address,
            "phone": phone,
            "email": email,
            "comment": comment
        }
        console.log(requestBody)

        const resp = dispatch(clientAPI.createClient(requestBody));
        handleClose();

    }


    const options = [
        {
            value: 'jack',
            label: 'Jack',
        },
        {
            value: 'lucy',
            label: 'Lucy',
        },
        {
            value: 'tom',
            label: 'Tom',
        },
    ];

    const getBicId = (element) => {
        console.log("aaa ", element.target.value);
        setBicId(element.target.value);

    }

    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show} onHide={handleClose}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавление клиента
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form.Group className="mb-3" controlId="fullNameText">
                    <Form.Label>Наименование полное</Form.Label>
                    <Form.Control type="text" placeholder="..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="shortNameText">
                    <Form.Label>Наименование краткое</Form.Label>
                    <Form.Control type="text" placeholder="..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="bicIdText">
                    <Form.Label>БИК(банковский идентификационный код)</Form.Label>
                    <p><input onChange={getBicId} list="bic" /></p>
                    <datalist id="bic">
                        {bicList.map(element => (
                            <option value={element.value}>{element.label}</option>
                        ))}
                        {/* <option>Аперитивы</option>
                        <option>Горячие</option>
                        <option>Десертные</option>
                        <option>Диджестивы</option>
                        <option>Молочные</option>
                        <option>Слоистые</option> */}
                    </datalist>
                </Form.Group>

                <Form.Group className="mb-3" controlId="opfText">
                    <Form.Label>ОПФ</Form.Label>
                    <Form.Control type="text" placeholder="..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="innText">
                    <Form.Label>ИНН</Form.Label>
                    <Form.Control type="text" placeholder="..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cppText">
                    <Form.Label>КПП</Form.Label>
                    <Form.Control type="text" placeholder="..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="addressText">
                    <Form.Label>Адрес</Form.Label>
                    <Form.Control type="text" placeholder="..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phoneText">
                    <Form.Label>Телефон</Form.Label>
                    <Form.Control type="text" placeholder="..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="emailText">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="ceoFullNameText">
                    <Form.Label>ФИО руководителя</Form.Label>
                    <Form.Control type="text" placeholder="..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="ceoStatusText">
                    <Form.Label>Должность руководителя</Form.Label>
                    <Form.Control type="text" placeholder="..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="commentText">
                    <Form.Label>Комментарий</Form.Label>
                    <Form.Control type="text" placeholder="..." />
                </Form.Group>
                <Form.Check className='mt-3'
                    type='checkbox'
                    id="clientTypeText"
                    label="Юридическое лицо"
                    checked={isClientType} // Устанавливаем состояние чекбокса 
                    onChange={handleCheckboxChange} // Обработчик изменения состояния чекбокса 

                />




                {/* <br /> */}
            </Modal.Body>
            <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button> */}
                <Button variant="primary" onClick={addClient}>
                    Сохранить
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddClientModal;