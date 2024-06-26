import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { clientAPI } from '../../../API/clientAPI';
import { userAPI } from '../../../API/userAPI';


const EditStatusModal = ({ show, handleClose, id, label }) => {

    const dispatch = useDispatch();

    const [newNameOfStatus, setNewNameOfStatus] = useState(label);

    useEffect(() => {
        setNewNameOfStatus(label);
    }, [label])

    const changeStatus = (element) => {
        setNewNameOfStatus(element.target.value);
    }

    const editStatus = async () => {
        const status = newNameOfStatus;

        const requestBody = {
            "name": status
        }

        await dispatch(userAPI.editStatus(requestBody, id));
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
                    Редактирование должности
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="editStatusText">
                    <Form.Label>Измените наименование должности</Form.Label>
                    <Form.Control type="text" onChange={changeStatus} value={newNameOfStatus} />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button> */}
                <Button variant="primary" onClick={editStatus}>
                    Сохранить
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditStatusModal;