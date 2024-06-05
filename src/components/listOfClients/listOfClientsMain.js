import React, { useState, useEffect } from 'react';
import './listOfClients.css'
import HeaderMain from '../header/headerMain';
import FiltersClients from './comp/filters';
import CardOfClient from './comp/cardOfClient';

const ListOfClientsMain = () => {

    return (
        <div>
            <HeaderMain />
            <FiltersClients />
            <CardOfClient />
            <CardOfClient />

        </div>

    )

}

export default ListOfClientsMain;