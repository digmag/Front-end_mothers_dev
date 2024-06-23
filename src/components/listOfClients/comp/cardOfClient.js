import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import '../listOfClients.css'

const CardOfClient = (props) => {
    const { faceType } = props;
    let backColor;
    if (faceType === 'LAW') {
        backColor = '#FFD6D6';
    }
    else {
        backColor = '#D6E4FF';
    }

    return (
        <Nav.Link as={Link} to={`/clients/id/details`}>
            <div className='mx-5 cardOfClient' style={{ background: backColor }}>
                <div className='mt-3 ms-5 clientCardLeftBlock'>
                    <h4>Наименование полное</h4>
                    <div className='mt-5'>ИНН(504094847879)</div>
                </div>
                <div className='mt-3 me-5 clientCardRightBlock'>
                    <div>Екатерина столбова</div>
                    <div className='mt-3'>+79138738565</div>
                    <div className='mt-3'>katrusikSt@yandex.ru</div>
                </div>

            </div>
        </Nav.Link>

    )
}

export default CardOfClient;