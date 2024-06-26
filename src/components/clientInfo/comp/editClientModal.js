import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { clientAPI } from '../../../API/clientAPI';
import { userAPI } from '../../../API/userAPI';
import { json } from 'react-router-dom';


const EditClientModal = ({ show, handleClose, id, clientType, fullName, shortName, inn, opf, cpp, ceoFullName, ceoStatus, email, phone, address, comment, requisitesFromRequest }) => {

    const dispatch = useDispatch();
    let clType;
    if (clientType === 'PHYSICAL') {
        clType = false;
    }
    else {
        clType = true;
    }

    const [isClientType, setIsClientType] = useState(clType); // Состояние для отслеживания выбора чекбокса 

    const handleCheckboxChange = (event) => {
        setIsClientType(event.target.checked);
    }// Устанавливаем состояние в соответствии с выбором чекбокса

    useEffect(() => {
        dispatch(clientAPI.getBicId());
        dispatch(clientAPI.getOpfId());

    }, [])

    // const concretOpf = useSelector(state => state.clientReducer.concretOpf[0].id);
    // console.log("eeeeeeeeeeeeeeeeeb ", concretOpf);
    const bicList = useSelector(state => state.clientReducer.bic);
    const opfList = useSelector(state => state.clientReducer.opf);

    const [bic, setBicId] = useState('');
    const [opfId, setOpfId] = useState(opf);

    const getBicId = (element) => {
        setBicId(element.target.value);

    }

    const getOpfId = (element) => {
        //console.log("aaa ", element.target.value);
        setOpfId(element.target.value);

    }

    /////////
    const [requisites, setRequisites] = useState([]);

    useEffect(() => {
        setRequisites(requisitesFromRequest.map(req => ({ ...req, initialBic: req.bic, bic: '' })));
    }, [requisitesFromRequest]);

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newRequisites = [...requisites];
        newRequisites[index][name] = value;
        setRequisites(newRequisites);
    };

    const handleAddRequisite = () => {
        setRequisites([...requisites, { id: '', bic: '', requisite: '', initialBic: '' }]);
    };

    ///жесть с заполнением форм
    const [fullNameEdit, setfullNameEdit] = useState(fullName);
    const changefullName = (element) => {
        setfullNameEdit(element.target.value);
    }

    const [shortNameEdit, setshortNameEdit] = useState(shortName);
    const changeshortName = (element) => {
        setshortNameEdit(element.target.value);
    }

    const [innEdit, setinnEdit] = useState(inn);
    const changeinn = (element) => {
        setinnEdit(element.target.value);
    }

    const [opfEdit, setopfEdit] = useState(opf);
    const changeopf = (element) => {
        setopfEdit(element.target.value);
    }

    const [cppEdit, setcppEdit] = useState(cpp);
    const changecpp = (element) => {
        setcppEdit(element.target.value);
    }

    const [addressEdit, setaddressEdit] = useState(address);
    const changeaddress = (element) => {
        setaddressEdit(element.target.value);
    }

    const [phoneEdit, setphoneEdit] = useState(phone);
    const changephone = (element) => {
        setphoneEdit(element.target.value);
    }

    const [emailEdit, setemailEdit] = useState(email);
    const changeemail = (element) => {
        setemailEdit(element.target.value);
    }

    const [ceoFullNameEdit, setceoFullNameEdit] = useState(ceoFullName);
    const changeceoFullName = (element) => {
        setceoFullNameEdit(element.target.value);
    }

    const [ceoStatusEdit, setceoStatusEdit] = useState(ceoStatus);
    const changeceoStatus = (element) => {
        setceoStatusEdit(element.target.value);
    }

    const [commentEdit, setcommentEdit] = useState(comment);
    const changecomment = (element) => {
        setcommentEdit(element.target.value);
    }
    // console.log("aaaaaaaaaaaaaaaaaaa", fullNameEdit);
    useEffect(() => {
        setIsClientType(clType);
        setfullNameEdit(fullName);
        setshortNameEdit(shortName);
        setinnEdit(inn);
        setOpfId(opf);
        setcppEdit(cpp);
        setaddressEdit(address);
        setphoneEdit(phone);
        setemailEdit(email);
        setceoFullNameEdit(ceoFullName);
        setceoStatusEdit(ceoStatus);
        setcommentEdit(comment);
    }, [fullName, shortName, inn, opf, cpp, address, phone, email, ceoFullName, ceoStatus, comment])


    const editClient = () => {
        const formattedData = requisites.map(requisite => ({
            id: requisite.id,
            bic: requisite.bic,
            requisite: requisite.requisite
        }));

        const clientType = isClientType;
        const bankRequisites = formattedData;
        const inn = innEdit;
        const opf = opfId;
        const cpp = cppEdit;
        const fullName = fullNameEdit;
        const shortName = shortNameEdit;
        const ceoFullName = ceoFullNameEdit;
        const ceoStatus = ceoStatusEdit;
        const address = addressEdit;
        const phone = phoneEdit;
        const email = emailEdit;
        const comment = commentEdit;
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
        console.log("офигенное тело запроса ", JSON.stringify(requestBody));
        const resp = dispatch(clientAPI.editClient(requestBody, id));
        handleClose();

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
                    Редактирование клиента
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form.Check className='mb-4'
                    type='checkbox'
                    id="clientTypeEditText"
                    label="Юридическое лицо"
                    checked={isClientType} // Устанавливаем состояние чекбокса 
                    onChange={handleCheckboxChange} // Обработчик изменения состояния чекбокса 
                />

                <Form.Group className="mb-3" controlId="innEditText">
                    <Form.Label>ИНН</Form.Label>
                    <Form.Control onChange={changeinn} type="text" defaultValue={inn} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="fullNameEditText">
                    <Form.Label>Наименование полное</Form.Label>
                    <Form.Control onChange={changefullName} type="text" defaultValue={fullName} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="shortNameEditText">
                    <Form.Label>Наименование краткое</Form.Label>
                    <Form.Control onChange={changeshortName} type="text" defaultValue={shortName} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="bicIdEditText">
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
                                        name="bic"
                                        value={requisite.bic} // Изменено с placeholder на value
                                        placeholder={requisite.initialBic}
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
                                    name="requisite"
                                    value={requisite.requisite}
                                    onChange={(e) => handleInputChange(index, e)}
                                />
                            </Form.Group>
                        </div>
                    ))}
                    {/* <Button variant="secondary" className='mt-2' onClick={handleAddRequisite}>Добавить реквизит</Button>{' '} */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="opfEditText">
                    <Form.Label>ОПФ</Form.Label>
                    <p><input onChange={getOpfId} placeholder={opf} list="opf" className='addClientInput' /></p>
                    <datalist id="opf">
                        {opfList.map(element => (
                            <option value={element.value}>{element.label}</option>
                        ))}
                    </datalist>
                </Form.Group>

                <Form.Group className="mb-3" controlId="cppEditText">
                    <Form.Label>КПП</Form.Label>
                    <Form.Control onChange={changecpp} type="text" defaultValue={cpp} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="addressEditText">
                    <Form.Label>Адрес</Form.Label>
                    <Form.Control onChange={changeaddress} type="text" defaultValue={address} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phoneEditText">
                    <Form.Label>Телефон</Form.Label>
                    <Form.Control onChange={changephone} type="text" defaultValue={phone} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="emailEditText">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={changeemail} type="text" defaultValue={email} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="ceoFullNameEditText">
                    <Form.Label>ФИО руководителя</Form.Label>
                    <Form.Control onChange={changeceoFullName} type="text" defaultValue={ceoFullName} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="ceoStatusEditText">
                    <Form.Label>Должность руководителя</Form.Label>
                    <Form.Control onChange={changeceoStatus} type="text" defaultValue={ceoStatus} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="commentEditText">
                    <Form.Label>Комментарий</Form.Label>
                    <Form.Control onChange={changecomment} type="text" defaultValue={comment} />
                </Form.Group>

            </Modal.Body>
            <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button> */}
                <Button variant="primary" onClick={editClient}>
                    Сохранить
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditClientModal;