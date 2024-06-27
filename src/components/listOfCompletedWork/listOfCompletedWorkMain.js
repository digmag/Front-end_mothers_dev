import React, { useEffect, useState } from 'react';
import HeaderMain from '../header/headerMain';
import { useDispatch, useSelector } from 'react-redux';
import doneWorkAPI from '../../API/doneWorkAPI';
import { Row, Col, Form, Container, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const ListOfCompletedWorkMain = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(doneWorkAPI.getDoneWork("",""));
    }, [])
    const state = useSelector(state => state.doneWorkReducer);
    const [st, setSt] = useState({start:"", end:""});
    const onInput1 = (e) => {
        setSt({start: e.target.value, end: st.end})
    }
    const onInput2 = (e) => {
        setSt({start: st.start, end: e.target.value})
    }
    const click = () => {
        dispatch(doneWorkAPI.getDoneWork(st.start, st.end))
    }
    const sumConverter = (sum) => {
        if(sum === 0){
            return "0.0"
        }
        let summ = String(sum).split(".");
        return `${summ[0]}.${summ[1]!=undefined?String(summ[1]).slice(0,2):"00"}`
    }

    return (
        <div>
            <HeaderMain />
            <Container className='mt-2'>
                <Row>
                    <Col>
                        <Form.Label>Дата начала периода</Form.Label>
                        <Form.Control onInput={onInput1} type='date' placeholder='Дата начала'/>
                    </Col>
                    <Col>
                        <Form.Label>Дата конца периода</Form.Label>
                        <Form.Control onInput={onInput2} type='date' placeholder='Дата начала'/>
                    </Col>
                </Row>
                <Button className='mt-2' onClick={click}>Применить</Button>
            </Container>
            <Table bordered className='mt-2'>
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
                            <>
                            <tr>
                                <td>{el.fullName}</td>
                            </tr>
                            {el.contractReport.map(doc => (
                                <tr>
                                    <tb></tb>
                                    <td>{doc.contractNumber}</td>
                                    <td>{doc.priceLists.priceListPosition}</td>
                                    <td>{doc.priceLists.count}</td>
                                    <td>{sumConverter(doc.priceLists.sum)}</td>
                                </tr>
                            ))}
                            <tr>
                                <tb>Итого выполнено за период: {sumConverter(el.sum)}</tb>
                            </tr>
                            </>
                        ))}
                </tbody>
            </Table>
        </div>
    )
}

export default ListOfCompletedWorkMain;