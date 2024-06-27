import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { clientAPI } from '../../../API/clientAPI';
import { userAPI } from '../../../API/userAPI';
import { contractAPI } from '../../../API/contractAPI';

const EditPriceModal = ({ show, handleClose, id }) => {
    console.log(id)
    const dispatch = useDispatch();
    const [state, setState] = useState({
        law:"",
        name:"",
        price:""
    })
    const setLaw = (e) => {
        setState({
            law:e.target.value,
            name:state.name,
            price:state.price
        })
    }
    const setName = (e) => {
        setState({
            law:state.law,
            name:e.target.value,
            price:state.price
        })
    }
    const setPrice = (e) => {
        setState({
            law:state.law,
            name:state.name,
            price:e.target.value
        })
    }
    const editPrice = () => {
        dispatch(contractAPI.editPrice(state, id))
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
                    Создание позиции прайс листа
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                    <Form.Label>Закон</Form.Label>
                    <Form.Control onInput={setLaw} placeholder='223 или 44'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Наименование</Form.Label>
                    <Form.Control onInput={setName} placeholder='Имя'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Цена</Form.Label>
                    <Form.Control onInput={setPrice} type='number' placeholder='123'/>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="warning" onClick={editPrice}>
                    Изменить
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditPriceModal;