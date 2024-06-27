import React, { useState, useEffect } from 'react';
import HeaderMain from '../header/headerMain';
import { useDispatch, useSelector } from 'react-redux';
import { userAPI } from '../../API/userAPI';
import ListGroup from 'react-bootstrap/ListGroup';
import { clientAPI } from '../../API/clientAPI';

const ListOfManualsMain = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userAPI.getStatus());
        dispatch(clientAPI.getOpfId());
    }, [])

    const statuses = useSelector(state => state.userReducer.statusList);
    const opfs = useSelector(state => state.clientReducer.opf);

    //console.log("rrr", statuses);

    return (
        <div>
            <HeaderMain />
            <div className='mt-3 mx-5'>
                <h4>Список справочников</h4>
                <h5 className='mt-5'>Должности:</h5>
                <ListGroup>
                    {statuses.map(el => (
                        <ListGroup.Item>{el.label}</ListGroup.Item>

                    ))}
                </ListGroup>
                <h5 className='mt-5'>Организационно-правовые формы:</h5>
                <ListGroup>
                    {opfs.map(el => (
                        <ListGroup.Item>{el.label}</ListGroup.Item>

                    ))}
                </ListGroup>
            </div>


        </div>
    )
}

export default ListOfManualsMain;