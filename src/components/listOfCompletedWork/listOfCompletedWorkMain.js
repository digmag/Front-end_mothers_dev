import React, { useEffect } from 'react';
import HeaderMain from '../header/headerMain';
import { useDispatch, useSelector } from 'react-redux';
import doneWorkAPI from '../../API/doneWorkAPI';
import { Col, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const ListOfCompletedWorkMain = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(doneWorkAPI.getDoneWork());
    }, [])
    const state = useSelector(state => state.doneWorkReducer);
    const a = [];
    return (
        <div>
            <HeaderMain />
            {/* <Container>
                <Row>
                    <Col>Имя</Col>
                    <Col>Договор</Col>
                    <Col>Услуга</Col>
                    <Col>Объем</Col>
                    <Col>Сумма</Col>
                </Row>
                {
                    state.employeeReports.map(el => (
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
                                {el.contractReport.length !== 0 ? (
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
                                ) : (<Row>
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
            </Container> */}

            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Договор</th>
                        <th>Услуга</th>
                        <th>Объем</th>
                        <th>Сумма</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.employeeReports.map(el => (
                            <tr>
                                <td>{el.fullName}</td>
                                {el.contractReport.map(doc => (
                                    <tr>
                                        <td>{doc.contractNumber}</td>
                                        <td>{doc.priceLists.priceListPosition}</td>
                                        <td>@mdo</td>
                                    </tr>

                                ))}

                            </tr>
                        ))}
                    {/* <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr> */}
                </tbody>
            </Table>
        </div>
    )
}

export default ListOfCompletedWorkMain;