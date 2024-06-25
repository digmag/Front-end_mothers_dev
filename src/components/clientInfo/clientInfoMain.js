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

    const { faceType, bicId, inn, opf, cpp, fullName, shortName, ceoFullName, ceoStatus, address, phone, email, comment } = useSelector(state => state.clientReducer.clientInfo);
    console.log("пробуем из стейта ", fullName);

    let face = '';
    if (faceType === "LAW") {
        face = "Юридическое лицо";
    }
    else {
        face = "Физическое лицо";
    }

    return (
        <div>
            <HeaderMain />
            <div className='mt-4 mx-5 clientInfoBlock'>
                <div>
                    <h4>{fullName}</h4>
                    <h5>Наименование краткое: {shortName}</h5>
                    <div>{face}</div>
                    <div>ИНН: {inn}</div>
                    <div>ОПФ: {opf}</div>
                    <div>КПП: {cpp}</div>
                    <div>ФИО руководителя: {ceoFullName}</div>
                    <div>Должность руководителя: {ceoStatus}</div>
                    <div>БИК: {bicId.bankName}</div>
                    <div>Email: {email}</div>
                    <div>Телефон: {phone}</div>

                    <div>Адрес: {address}</div>
                    <div>Комментарий: {comment}</div>


                </div>


            </div>

        </div>

    )

}

export default ClientInfoMain;