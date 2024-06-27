import React, { useState, useEffect } from 'react';
import HeaderMain from '../../header/headerMain';
import { useParams } from 'react-router-dom';
import '../../clientInfo/clientInfo.css';
import { useDispatch, useSelector } from 'react-redux';
import { contractAPI } from '../../../API/contractAPI';
import PirceListContract from './priceListContract';

const ContractInfoMain = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(contractAPI.getConcreteContract(id));
    }, [])
    const concrete = useSelector(state => state.contractReducer.contract);
    console.log(concrete)
    return (
        <div>
            <HeaderMain />
            <div className='mt-4 mx-5 clientInfoBlock px-4' style={{ textAlign: "left" }}>
                <div>
                    <h4>Номер договора: {concrete.number}</h4>
                    <div>Объект: {concrete.subject}</div>
                    <div>Клиент: {concrete.client.fullName}</div>
                    <div className='mx-4'>ФИО руководителя: {concrete.client.ceoFullName}</div>
                    <div className='mx-4'>ИНН: {concrete.client.inn}</div>
                    <div>Работник: {concrete.employee.fullName}</div>
                    <div className='mx-4'>Должность: {concrete.employee.status}</div>
                    <div>Дата вступления в силу: {concrete.startDate}</div>
                    <div>Дата окончания договора: {concrete.endDoingDate}</div>
                    <div>Дата окончания срока годности: {concrete.endLifeDate}</div>
                    <div>Цена: {concrete.price}</div>
                    {(concrete.end) ? (<div>Закончен</div>) : (<div>Не закончен</div>)}
                </div>


            </div>

            {concrete.priceList.map(el => (
                <PirceListContract key={el.id} name={el.name} volume={concrete.volume}
                    count={el.count}
                    done={el.done}
                    price={el.price}
                    sum={el.sum}
                    id={el.id}
                    disp={() => dispatch(contractAPI.getConcreteContract(id))}
                />
            ))}

        </div>

    )

}

export default ContractInfoMain;