import React, { useEffect } from 'react';
import HeaderMain from '../header/headerMain';
import { useDispatch, useSelector } from 'react-redux';
import doneWorkAPI from '../../API/doneWorkAPI';
import { Col, Container, Row } from 'react-bootstrap';

const ListOfCompletedWorkMain = () => {
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(doneWorkAPI.getDoneWork());
    },[])
    const state = useSelector(state => state.doneWorkReducer);
    const a= [];
    return (
        <div>
            <HeaderMain />
            <Container>
                <Row>
                    <Col>Имя</Col>
                    <Col>Договор</Col>
                    <Col>Услуга</Col>
                    <Col>Объем</Col>
                    <Col>Сумма</Col>
                </Row>
                {
                    state.employeeReports.map(el =>(
                        <>
                        <Row>
                            <Col>
                                {el.fullName}
                            </Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            {el.contractReport.length !==0?(
                                <Col>
                                <Row>
                                    {el.contractReport.map(ell => (
                                        <>
                                        <Col>{ell.contractNumber}</Col>
                                        <Col></Col>
                                        <Col></Col>
                                        <Col></Col>
                                        </>
                                    ))}
                                </Row>
                                </Col>
                            ):(<Row>
                                <Col></Col>
                                <Col></Col>
                                <Col></Col>
                                <Col></Col>
                            </Row>)}
                        </Row>
                        <Row>
                            <Col>{el.sum}</Col>
                        </Row>
                        </>
                    ))
                }
            </Container>
        </div>
    )
}

export default ListOfCompletedWorkMain;