import React, { useState, useEffect } from 'react';
import './listOfClients.css'
import HeaderMain from '../header/headerMain';
import FiltersClients from './comp/filters';
import CardOfClient from './comp/cardOfClient';
import { useDispatch, useSelector } from 'react-redux';
import { clientAPI } from '../../API/clientAPI';

const ListOfClientsMain = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clientAPI.getListOfClients(0));
    }, [])
    const clients = useSelector(state => state.clientReducer);




    return (
        <div>
            <HeaderMain />
            <FiltersClients />
            {clients.clients.map(client => (
                <CardOfClient key={client.id} id={client.id} faceType={client.faceType} fullName={client.fullName} inn={client.inn} ceoFullName={client.ceoFullName} phone={client.phone} email={client.email} />
            ))}

            {/* <CardOfClient entity='legal' /> */}

        </div>

    )

}

export default ListOfClientsMain;