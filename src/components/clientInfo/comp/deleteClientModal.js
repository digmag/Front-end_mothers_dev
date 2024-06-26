import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { clientAPI } from '../../../API/clientAPI';
import { userAPI } from '../../../API/userAPI';
import { useNavigate } from 'react-router-dom';


const DeleteClientModal = ({ show, handleClose, id }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteClient = async () => {
        await dispatch(clientAPI.deleteClient(id, navigate));
        // dispatch(userAPI.getStatus());
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
                    Удалить клиента?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Данное действие нельзя будет отменить.
            </Modal.Body>
            <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button> */}
                <Button variant="danger" onClick={deleteClient}>
                    Удалить
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteClientModal;