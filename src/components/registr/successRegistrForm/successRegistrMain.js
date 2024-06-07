import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './successRegistr.css'

const SuccessRegistr = () => {

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
                    <Button variant="primary" className='mb-4'>Войти</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default SuccessRegistr;