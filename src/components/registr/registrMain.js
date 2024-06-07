import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './registr.css'

const RegistrMain = () => {

    return (
        <div>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog
                    className='registrForm'
                    size="lg">
                    <Modal.Header>
                        <Modal.Title className='mt-4'>АЭТ. <span>Учёт</span></Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3 authInput" controlId="formRegistrSurname">
                                <Form.Control type="text" placeholder="Фамилия" />
                            </Form.Group>

                            <Form.Group className="mb-3 authInput" controlId="formRegistrName">
                                <Form.Control type="text" placeholder="Имя" />
                            </Form.Group>

                            <Form.Group className="mb-3 authInput" controlId="formRegistrPatronymic">
                                <Form.Control type="text" placeholder="Отчество" />
                            </Form.Group>

                            <Form.Group className="mb-3 authInput" controlId="formRegistrPosition">
                                <Form.Control type="text" placeholder="Должность" />
                            </Form.Group>

                            <Form.Group className="mb-3 authInput" controlId="formRegistrEmail">
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>

                            <Form.Group className="mb-3 authInput" controlId="formRegistrPassword">
                                <Form.Control type="password" placeholder="Пароль" />
                            </Form.Group>

                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" className='mb-4'>Зарегистрироваться</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
            <div className='goToRegistration'>
                <span>Уже есть аккаунт?</span>
                <Nav.Link as={Link} to="/login">Войти</Nav.Link>
            </div>
        </div>
    )

}

export default RegistrMain;