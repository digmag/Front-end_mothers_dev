import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { clientAPI } from '../../../API/clientAPI';


const AddClientModal = ({ show, handleClose }) => {

    const dispatch = useDispatch();

    const addClient = () => {
        const clientType = false;
        const bicId = 396186;
        const inn = document.getElementById('innText').value;
        const opf = document.getElementById('opfText').value;
        const fullName = document.getElementById('fullNameText').value;
        const shortName = document.getElementById('shortNameText').value;
        const ceoFullName = document.getElementById('ceoFullNameText').value;
        const ceoStatus = document.getElementById('ceoStatusText').value;
        const address = document.getElementById('addressText').value;
        const phone = document.getElementById('phoneText').value;
        const email = document.getElementById('emailText').value;
        const comment = "000";
        const requestBody = {
            "clientType": clientType,
            "bicId": bicId,
            "inn": inn,
            "opf": opf,
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

                <Form.Group className="mb-3" controlId="opfText">
                    <Form.Label>ОПФ</Form.Label>
                    <Form.Control type="text" placeholder="..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="innText">
                    <Form.Label>ИНН</Form.Label>
                    <Form.Control type="text" placeholder="..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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