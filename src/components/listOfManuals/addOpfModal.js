import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { clientAPI } from '../../API/clientAPI';
import { userAPI } from '../../API/userAPI';


const AddOpfModal = ({ show, handleClose }) => {

    const dispatch = useDispatch();

    const addOpf = async () => {
        const opf = document.getElementById('opfNameAddText').value;
        const code = document.getElementById('opfIdAddText').value;

        const requestBody = {
            "id": code,
            "name": opf
        }

        await dispatch(clientAPI.addOpf(requestBody));
        dispatch(clientAPI.getOpfId());
        handleClose();

    }

    return (
        <Modal

            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show} onHide={handleClose}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавление ОПФ
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="opfNameAddText">
                    <Form.Label>ОПФ</Form.Label>
                    <Form.Control type="text" placeholder="Введите название новой опф" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="opfIdAddText">
                    <Form.Label>Код</Form.Label>
                    <Form.Control type="text" placeholder="Введите код новой опф" />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button> */}
                <Button variant="primary" onClick={addOpf}>
                    Сохранить
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddOpfModal;