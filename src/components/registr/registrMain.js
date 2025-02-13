import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { Link, useNavigate } from 'react-router-dom';
import './registr.css'
import { useDispatch, useSelector } from 'react-redux';
import { userAPI } from '../../API/userAPI';
import { Select } from 'antd';


const RegistrMain = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();



    useEffect(() => {
        dispatch(userAPI.getStatus());
    }, [])
    const statusList = useSelector(state => state.userReducer.statusList);

    const [statusId, setStatusId] = useState('');
    const onChange = (value) => {
        // console.log(`selected ${value}`);
        setStatusId(value);
    };
    // const onSearch = (value) => {
    //     console.log('search:', value);
    // };

    const [errors, setErrors] = useState({
        email: false,
        password: false,
        surname: false,
        name: false,
        patronymic: false,
        status: false,
    });

    const userRegistr = () => {
        const email = document.getElementById('formRegistrEmail').value;
        const password = document.getElementById('formRegistrPassword').value;
        const surname = document.getElementById('formRegistrSurname').value;
        const name = document.getElementById('formRegistrName').value;
        const patronymic = document.getElementById('formRegistrPatronymic').value;
        const idPosition = statusId;
        const fullName = `${surname} ${name} ${patronymic}`;

        const newErrors = {
            email: !email,
            password: !password,
            surname: !surname,
            name: !name,
            patronymic: !patronymic,
            status: !idPosition,
        };

        setErrors(newErrors);

        if (Object.values(newErrors).some(error => error)) {
            return;
        }
        const requestBody = {
            "fullName": fullName,
            "email": email,
            "password": password,
            "status": idPosition
        }

        //нужно ли тут try catch, потому что я и так же ошибки обрабатываю внутри try
        //где хранить токен

        const resp = dispatch(userAPI.registration(requestBody)
        ).then(data => {
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
                                <Form.Control type="text" placeholder="Фамилия" isInvalid={errors.surname} />
                            </Form.Group>

                            <Form.Group className="mb-3 authInput" controlId="formRegistrName">
                                <Form.Control type="text" placeholder="Имя" isInvalid={errors.name} />
                            </Form.Group>

                            <Form.Group className="mb-3 authInput" controlId="formRegistrPatronymic">
                                <Form.Control type="text" placeholder="Отчество" isInvalid={errors.patronymic} />
                            </Form.Group>

                            <Form.Group className="mb-3 authInput" controlId="formRegistrPosition">
                                <Select style={{ width: "90%", border: "#000000" }} showSearch
                                    placeholder="Должность"
                                    optionFilterProp="label"
                                    onChange={onChange}
                                    // onSearch={onSearch}
                                    options={statusList}
                                />


                            </Form.Group>

                            <Form.Group className="mb-3 authInput" controlId="formRegistrEmail">
                                <Form.Control type="email" placeholder="Email" isInvalid={errors.email} />
                            </Form.Group>

                            <Form.Group className="mb-3 authInput" controlId="formRegistrPassword">
                                <Form.Control type="password" placeholder="Пароль" isInvalid={errors.password} />
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
        </div >
    )

}

export default RegistrMain;