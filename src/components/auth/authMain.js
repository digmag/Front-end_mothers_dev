import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css'
import { useDispatch } from 'react-redux';
import { userAPI } from '../../API/userAPI';
import { loginActionCreator } from '../../reducers/user-reducer';


const AuthMain = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.clear();
    }, [])

    const userLogin = () => {
        const email = document.getElementById('authEmail').value;
        const password = document.getElementById('authPassword').value;
        const requestBody = {
            "email": email,
            "password": password
            //тестовые данные, поменять url
            // username: 'emilys',
            // password: 'emilyspass',
            // expiresInMins: 30
        }
        console.log(requestBody)
        //нужно ли тут try catch, потому что я и так же ошибки обрабатываю внутри try
        //где хранить токен

        const resp = dispatch(userAPI.login(requestBody)
        ).then(data => {
            console.log("ttttttt");
            localStorage.setItem("token", data.token);
            dispatch(loginActionCreator());
            navigate("/clients");
        }).catch(error => console.log(error));


    }

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
                        <Button variant="primary" type='submit' onClick={userLogin}>Войти</Button>
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