import React, { useState, useEffect } from 'react';
import HeaderMain from '../../header/headerMain';
import { useParams } from 'react-router-dom';
import '../../clientInfo/clientInfo.css';
import { useDispatch, useSelector } from 'react-redux';
import { clientAPI } from '../../../API/clientAPI';
import { contractAPI } from '../../../API/contractAPI';
import useSelection from 'antd/es/table/hooks/useSelection';

const ContractInfoMain = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(contractAPI.getListOfContracts());
    }, [])
    const contracts = useSelector(state=>state.contractReducer.contracts)
    const concrete = contracts.find(concrete => concrete.id === id)

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

export default ContractInfoMain;