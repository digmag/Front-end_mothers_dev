import React, { useState, useEffect } from 'react';
import HeaderMain from '../header/headerMain';
import { useParams } from 'react-router-dom';
import './clientInfo.css';
import { useDispatch } from 'react-redux';
import { clientAPI } from '../../API/clientAPI';

const ClientInfoMain = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect((id) => {
        dispatch(clientAPI.getClientInfo(id));
    }, [])

    return (
        <div>
            <HeaderMain />
            <div className='mt-4 mx-5 clientInfoBlock'>
                <div>
                    <h4>{id}</h4>
                    <div>Наименование краткое</div>
                    <div>ИНН</div>
                    <div>КПП</div>
                    <div>Адрес</div>
                    <div>ооо</div>
                </div>


            </div>

        </div>

    )

}

export default ClientInfoMain;