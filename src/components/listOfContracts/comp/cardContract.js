import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import '../../listOfClients/listOfClients.css';
import { Row, Col, Button } from 'antd';

const CardContract = (props) => {
    const prop = props.contract;
    function formatDate(dateString) {
        const date = new Date(dateString);
    
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
    
        return `${year}-${month}-${day}`;
    }
    let backColor;
    let textColor;
    let now = Date();
    if(prop.end === true){
        backColor = '#D6FFDF'; //зеленый
        textColor = '#37DA65'
    }
    else if(prop.end === false && prop.endDoingDate.toString() < formatDate(now).toString()){
        backColor = '#FFD6D6'; //красный
        textColor = '#DA3737'
    }
    else{
        backColor = '#D6E4FF'; //голубой
        textColor = '#376EDA'
    }


    return (
        <Nav.Link>
            <div className='mx-5 cardOfClient' style={{ background: backColor, width:'75vw' , display:'flex', flexDirection:'column', margin:'2vh 0 0 0'}}>
                <Row style={{height:'70%'}}>
                    <div style={{width:'100%', display:'flex', justifyContent:'space-around'}}>
                        <Col span={4} style={{color: textColor, fontSize:'24px', fontFamily:'Montserrat', margin:'2vh 0 0 0'}}>
                            <span>Договор №{prop.number}</span>
                        </Col>
                        <Col span={3} style={{color:'#90939A', fontSize:'22px', fontFamily:'Montserrat', margin:'2vh 0 0 0'}}>
                            <span>{prop.date}</span>
                        </Col>
                        <Col span={3} style={{color:'#90939A', fontSize:'22px', fontFamily:'Montserrat', margin:'2vh 0 0 0'}}>
                            <span>{prop.price}руб</span>
                        </Col>
                        <Col span={3} style={{color:'#90939A', fontSize:'22px', fontFamily:'Montserrat', margin:'2vh 0 0 0'}}>
                            <span>{prop.endDoingDate}</span>
                        </Col>
                        <Col span={5} style={{color:'#90939A', fontSize:'22px', fontFamily:'Montserrat', margin:'2vh 0 0 0'}}>
                            <span>{prop.client.fullName}</span>
                        </Col>
                    </div>
                    
                </Row>
                <Row style={{display:'flex', justifyContent:'space-between', height:'30%', alignItems:'center'}}>
                    <Col span={7} style={{color:'#90939A', fontSize:'22px', fontFamily:'Montserrat'}}>
                        <span>{prop.employee.fullName}</span>
                    </Col>
                    <Col span={2}>
                        <Button type='primary' danger style={{backgroundColor:'#DA3737'}}>Удалить</Button>
                    </Col>
                </Row>
            </div>
        </Nav.Link>
    )
}

export default CardContract;