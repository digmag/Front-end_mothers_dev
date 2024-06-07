import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './auth.css'


const AuthMain = () => {

    return (
        <div>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog
                    className='authForm'
                    size="lg">
                    <Modal.Header>
                        <Modal.Title className='mt-4'>АЭТ. <span>Учёт</span></Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3 authInput" controlId="authEmail">
                                <Form.Control type="email" placeholder="Логин" />
                            </Form.Group>

                            <Form.Group className="mb-3 authInput" controlId="authPassword">
                                <Form.Control type="password" placeholder="Пароль" />
                            </Form.Group>

                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary">Войти</Button>
                        <Nav.Link className='mt-3 mb-4' as={Link} to="/passwordConfirm">Забыли пароль?</Nav.Link>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
            <div className='goToRegistration'>
                <span>Нет аккаунта?</span>
                <Nav.Link as={Link} to="/registration">Зарегистрироваться</Nav.Link>
            </div>
        </div>

    )

}

export default AuthMain;