import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './editPassword.css'

const EditPasswordMain = () => {

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog
                className='editPasswordForm'
                size="lg">
                <Modal.Header >
                    <Modal.Title className='mt-4'>Изменение пароля</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3 authInput" controlId="editPassword">
                            <Form.Control type="password" placeholder="Введите новый пароль" />
                        </Form.Group>

                        <Form.Group className="mb-3 authInput" controlId="editPasswordConfirm">
                            <Form.Control type="password" placeholder="Подтвердите пароль" />
                        </Form.Group>

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" className='mb-4'>Изменить пароль</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>

    )

}

export default EditPasswordMain;