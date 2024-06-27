import React, { useState, useEffect } from 'react';
import HeaderMain from '../header/headerMain';
import Filters from './comp/filters';
import { useDispatch, useSelector } from 'react-redux';
import { contractAPI } from '../../API/contractAPI';
import CardContract from './comp/cardContract';

const ListOfContractsMain = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(contractAPI.getListOfContracts())
    }, [])

    const contractsList = useSelector(state => state.contractReducer);

    return (
        <div>
            <HeaderMain />

            <Filters />
            {contractsList.contracts.map(contract => (
                <CardContract contract={contract} />
            ))}
        </div>

    )
}

export default ListOfContractsMain;