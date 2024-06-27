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
    const concrete = useSelector(state=>state.contractReducer.contract)
    return (
        <div>
            <HeaderMain />
            <div className='mt-4 mx-5 clientInfoBlock'>
                <div>
                    <h4>{concrete.number}</h4>
                    <div>Наименование краткое</div>
                    <div>ИНН</div>
                    <div>КПП</div>
                    <div>Адрес</div>
                    <div>ооо</div>
                </div>


            </div>

            {concrete.priceList.map(el => (
                <PirceListContract key={el.id} name={el.name}
                count={el.count}
                done={el.done}
                price={el.price}
                sum={el.sum}
                id={el.id}
                disp={()=>dispatch(contractAPI.getConcreteContract(id))}
                />
            ))}

        </div>

    )

}

export default ContractInfoMain;