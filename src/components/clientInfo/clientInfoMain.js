import React, { useState, useEffect } from 'react';
import HeaderMain from '../header/headerMain';
import { useParams } from 'react-router-dom';
import './clientInfo.css';
import { useDispatch, useSelector } from 'react-redux';
import { clientAPI } from '../../API/clientAPI';

const ClientInfoMain = () => {

    const { id } = useParams();
    console.log("Получение ид ", id)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clientAPI.getClientInfo(id));
    }, [])

    const { fullName } = useSelector(state => state.clientReducer.clientInfo);
    console.log("пробуем из стейта ", fullName);

    return (
        <div>
            <HeaderMain />
            <div className='mt-4 mx-5 clientInfoBlock'>
                <div>
                    <h4>{fullName}</h4>
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