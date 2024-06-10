import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { Link, useNavigate } from 'react-router-dom';
import './registr.css'
import { useDispatch } from 'react-redux';
import { userAPI } from '../../API/userAPI';

const RegistrMain = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userRegistr = () => {
        const email = document.getElementById('formRegistrEmail').value;
        const password = document.getElementById('formRegistrPassword').value;
        const surname = document.getElementById('formRegistrSurname').value;
        const name = document.getElementById('formRegistrName').value;
        const patronymic = document.getElementById('formRegistrPatronymic').value;
        const idPosition = "e3c1414a-7893-44da-90c2-c9c17ac49c39";
        const fullName = `${surname} ${name} ${patronymic}`;
        const requestBody = {
            "fullName": fullName,
            "email": email,
            "password": password,
            "status": idPosition
        }
        console.log(requestBody)
        //нужно ли тут try catch, потому что я и так же ошибки обрабатываю внутри try
        //где хранить токен

        const resp = dispatch(userAPI.registration(requestBody)
        ).then(data => {
            console.log("ttttttt");
            alert("Подтвердите аккаунт на почте");
        }).catch(error => console.log(error));


    }

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
                        <Button variant="primary" className='mb-4' onClick={userRegistr}>Зарегистрироваться</Button>
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