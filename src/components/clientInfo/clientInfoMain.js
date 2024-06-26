import React, { useState, useEffect } from 'react';
import HeaderMain from '../header/headerMain';
import { useParams } from 'react-router-dom';
import './clientInfo.css';
import { useDispatch, useSelector } from 'react-redux';
import { clientAPI } from '../../API/clientAPI';

const ClientInfoMain = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clientAPI.getClientInfo(id));
    }, [])

    const { faceType, requisites, inn, opf, cpp, fullName, shortName, ceoFullName, ceoStatus, address, phone, email, comment } = useSelector(state => state.clientReducer.clientInfo);

    let face = '';
    let backColor;
    if (faceType === "LAW") {
        face = "Юридическое лицо";
        backColor = '#FFD6D6';
    }
    else {
        face = "Физическое лицо";
        backColor = '#D6E4FF';
    }


    return (
        <div>
            <HeaderMain />
            <div className='mt-4 mx-5 clientInfoBlock' style={{ background: backColor }}>
                <div className='ms-4' style={{ textAlign: 'left' }}>
                    <h4>{fullName}</h4>
                    <h5>Наименование краткое: {shortName}</h5>
                    <div>{face}</div>
                    <div>ИНН: {inn}</div>
                    <div>ОПФ: {opf}</div>
                    <div>КПП: {cpp}</div>
                    <div>ФИО руководителя: {ceoFullName}</div>
                    <div>Должность руководителя: {ceoStatus}</div>
                    {/* <div>Реквизиты: {requisites.bic}</div> */}
                    <div>Email: {email}</div>
                    <div>Телефон: {phone}</div>
                    <div>Адрес: {address}</div>
                    <div>Комментарий: {comment}</div>
                </div>

            </div>
            <div className='mt-4 mx-5' style={{ textAlign: 'left' }}>
                <h5>Реквизиты:</h5>
                {requisites.map(req => (
                    // <CardOfClient key={client.id} id={client.id} faceType={client.faceType} />
                    <div className='mb-2 req'>
                        <div>Банк: {req.bic}</div>
                        <div>Реквизит: {req.requisite}</div>
                    </div>
                ))}
            </div>

        </div>

    )

}

export default ClientInfoMain;