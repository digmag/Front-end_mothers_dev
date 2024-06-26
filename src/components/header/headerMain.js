import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './header.css'
import { useDispatch, useSelector } from 'react-redux';
import { userAPI } from '../../API/userAPI';

const HeaderMain = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userAPI.isAdmin());
    }, [])

    const isAdmin = useSelector(state => state.userReducer.isAdmin);

    return (
        <Navbar expand="lg" className="headerNavbar" >
            <Container fluid>
                <Navbar.Brand className='ps-5'>АЭТ. <span className='ychet'>Учёт</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/clients" >Клиенты</Nav.Link>
                        <Nav.Link as={Link} to="/contracts" >Договоры</Nav.Link>
                        <Nav.Link as={Link} to="/completedWork" >Выполненная работа</Nav.Link>
                        <Nav.Link as={Link} to="/manuals" >Справочники</Nav.Link>
                    </Nav>

                    <Nav className='mx-0'>
                        {isAdmin && <Nav.Link as={Link} to="/admin" className='me-4'>Админ панель</Nav.Link>}
                        <Nav.Link as={Link} to="/login" className='me-4'>Выход</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    )

}

export default HeaderMain;