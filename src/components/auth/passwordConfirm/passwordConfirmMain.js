import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './passwordConfirm.css'

const PasswordConfirmMain = () => {

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog
                className='confirmPasswordForm'
                size="lg">
                <Modal.Header >
                    <Modal.Title className='mt-4'>Забыли пароль?</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <div className='helpText'>
                            Введите свою электронную почту и мы отправим на нее письмо с восстановлением пароля
                        </div>
                        <Form.Group className="mb-1 mt-3 authInput" controlId="passwordConfirmEmail">
                            <Form.Control type="email" placeholder="Email" />

                        </Form.Group>

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" className='mb-3'>Отправить</Button>
                    <Nav.Link className='mb-4' as={Link} to="/login">Вернуться на страницу авторизации</Nav.Link>
                </Modal.Footer>
            </Modal.Dialog>
        </div>

    )

}

export default PasswordConfirmMain;