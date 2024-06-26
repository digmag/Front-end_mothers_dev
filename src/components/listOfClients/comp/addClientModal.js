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
        dispatch(clientAPI.getOpfId());
    }, [])
    const bicList = useSelector(state => state.clientReducer.bic);
    const opfList = useSelector(state => state.clientReducer.opf);

    const [bicId, setBicId] = useState('');
    const [opfId, setOpfId] = useState('');

    const addClient = () => {
        const formattedData = requisites.map(requisite => ({
            bic: requisite.bicId, requisite: requisite.requisit
        }));

        const clientType = isClientType;
        const bankRequisites = formattedData;
        const inn = document.getElementById('innText').value;
        const opf = opfId;
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
            "bankRequisites": bankRequisites,
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

        const resp = dispatch(clientAPI.createClient(requestBody));
        handleClose();

    }


    const getBicId = (element) => {
        setBicId(element.target.value);

    }

    const getOpfId = (element) => {
        //console.log("aaa ", element.target.value);
        setOpfId(element.target.value);

    }

    /////////
    const [requisites, setRequisites] = useState([{ bicId: '', requisit: '' }]);

    const handleAddRequisite = () => {
        setRequisites([...requisites, { bicId: '', requisit: '' }]);
    };

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newRequisites = [...requisites];
        newRequisites[index][name] = value;
        setRequisites(newRequisites);
    };


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

                <Form.Check className='mb-4'
                    type='checkbox'
                    id="clientTypeText"
                    label="Юридическое лицо"
                    checked={isClientType} // Устанавливаем состояние чекбокса 
                    onChange={handleCheckboxChange} // Обработчик изменения состояния чекбокса 
                />

                <Form.Group className="mb-3" controlId="innText">
                    <Form.Label>ИНН</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="fullNameText">
                    <Form.Label>Наименование полное</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="shortNameText">
                    <Form.Label>Наименование краткое</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="bicIdText">
                    <Form.Label>Реквизиты клиента</Form.Label>
                    {requisites.map((requisite, index) => (
                        <div className='mb-1 requisites' key={index}>
                            <Form.Group className='ms-2 rrrrr' controlId={`bicId${index}`}>
                                <Form.Label>БИК(банковский идентификационный код)</Form.Label>
                                <p>
                                    <input
                                        onChange={(e) => handleInputChange(index, e)}
                                        list="bic"
                                        className='addClientInput'
                                        name="bicId"
                                        value={requisite.bicId}
                                    />
                                </p>
                                <datalist id="bic">
                                    {bicList.map(element => (
                                        <option key={element.value} value={element.value}>{element.label}</option>
                                    ))}
                                </datalist>
                            </Form.Group>
                            <Form.Group className='me-2 ms-auto rrrrr' controlId={`requisit${index}`}>
                                <Form.Label>Реквизит</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="requisit"
                                    value={requisite.requisit}
                                    onChange={(e) => handleInputChange(index, e)}
                                />
                            </Form.Group>
                        </div>
                    ))}
                    <Button variant="secondary" className='mt-2' onClick={handleAddRequisite}>Добавить реквизит</Button>{' '}
                </Form.Group>

                <Form.Group className="mb-3" controlId="opfText">
                    <Form.Label>ОПФ</Form.Label>
                    <p><input onChange={getOpfId} list="opf" className='addClientInput' /></p>
                    <datalist id="opf">
                        {opfList.map(element => (
                            <option value={element.value}>{element.label}</option>
                        ))}
                    </datalist>
                </Form.Group>

                <Form.Group className="mb-3" controlId="cppText">
                    <Form.Label>КПП</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="addressText">
                    <Form.Label>Адрес</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phoneText">
                    <Form.Label>Телефон</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="emailText">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="ceoFullNameText">
                    <Form.Label>ФИО руководителя</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="ceoStatusText">
                    <Form.Label>Должность руководителя</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="commentText">
                    <Form.Label>Комментарий</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

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