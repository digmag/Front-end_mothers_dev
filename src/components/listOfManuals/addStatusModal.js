import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { clientAPI } from '../../API/clientAPI';
import { userAPI } from '../../API/userAPI';


const AddStatusModal = ({ show, handleClose }) => {

    const dispatch = useDispatch();

    const addStatus = async () => {
        const status = document.getElementById('statusAddText').value;

        const requestBody = {
            "name": status
        }

        await dispatch(userAPI.addStatus(requestBody));
        dispatch(userAPI.getStatus());
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
                    Добавление должности
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="statusAddText">

                    <Form.Control type="text" placeholder="Введите название новой должности" />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button> */}
                <Button variant="primary" onClick={addStatus}>
                    Сохранить
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddStatusModal;