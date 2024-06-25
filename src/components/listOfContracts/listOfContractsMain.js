import React, { useState, useEffect } from 'react';
import HeaderMain from '../header/headerMain';
import Filters from './comp/filters';

const ListOfContractsMain = () => {

    return (
        <div>
            <HeaderMain />
            <Filters/>
            Список договоров
        </div>
    )
}

export default ListOfContractsMain;