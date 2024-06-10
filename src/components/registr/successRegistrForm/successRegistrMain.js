import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './successRegistr.css'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { userAPI } from '../../../API/userAPI';
import { useDispatch } from 'react-redux';

const SuccessRegistr = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id");

    useEffect(() => {
        const resp = dispatch(userAPI.varification(id));
    }, [])


    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog
                className='successRegistrForm'>
                <Modal.Header >
                    <Modal.Title className='mt-4'>Поздравляю, вы успешно зарегистрировались</Modal.Title>
                </Modal.Header>

                <Modal.Footer>
                    <Button variant="primary" className='mb-4' onClick={() => { navigate('/login') }}>Войти</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default SuccessRegistr;