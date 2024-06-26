import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Select, DatePicker, Row, Col, Modal, Switch } from 'antd';

import HeaderMain from '../../header/headerMain';
import { useParams } from 'react-router-dom';
import '../../clientInfo/clientInfo.css';
import { useDispatch, useSelector } from 'react-redux';
import { clientAPI } from '../../../API/clientAPI';
import { userAPI } from '../../../API/userAPI';
import { contractAPI } from '../../../API/contractAPI';
import useSelection from 'antd/es/table/hooks/useSelection';

const ContractInfoMain = () => {

    const dispatch = useDispatch();
    const onChangeFirst = (checked) => {
        setIsEnd(checked);
    };
    const [isEnd, setIsEnd] = useState('');

    const onChangeSecond = (checked) => {
        setVolume(checked);
    };
    const [volume, setVolume] = useState('');

    const clients = useSelector(state=>state.clientReducer.clientsSimple);    
    useEffect(() => {
        dispatch(clientAPI.getSelectorClients());
        dispatch(userAPI.getEmployees());
      }, []);    
    const [clientId, setClientID] = useState("");
    const handleChange = async(value) => {
        await dispatch(clientAPI.getRequisites(value));
        setClientID(value)
      };

    const req = useSelector(state=>state.clientReducer.requisites)
    const listReq = [];
    req.forEach(element=>{
        listReq.push({value: element.id, label: element.requisite})
    })
    const [bankCode, setBankCode] = useState("");
    const handleChangeee = (value) => {
        setBankCode(value)
      };


    const workers = useSelector(state=>state.userReducer.workers);
    const [employeeId, setEmployeeId] = useState("");
    const handleChangee = (value) => {
        setEmployeeId(value)
      };



    const { id } = useParams();

    useEffect(() => {
        dispatch(contractAPI.getListOfContracts());
    }, [])
    const contracts = useSelector(state=>state.contractReducer.contracts)
    const concrete = contracts.find(concrete => concrete.id === id)
    console.log(concrete)

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
    if(concrete.end === true){
        backColor = '#D6FFDF'; //зеленый
        textColor = '#37DA65'
    }
    else if(concrete.end === false && concrete.endDoingDate.toString() < formatDate(now).toString()){
        backColor = '#FFD6D6'; //красный
        textColor = '#DA3737'
    }
    else{
        backColor = '#D6E4FF'; //голубой
        textColor = '#376EDA'
    }

    return (
        <div>
            <HeaderMain />
            <div className='mt-4 mx-5 clientInfoBlock' style={{backgroundColor:backColor, display:'flex', justifyContent:'flex-start', padding:'4vh'}}>
                <div>
                    <h4>Договор №{concrete.number}</h4>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div style={{width:'40%'}}>

                        <Form.Item name="username" style={{margin:'0 0 1vh 0', width:'40vw', color:'#adadc2'}}>Максимальная цена</Form.Item>
                        <Input id='price'/>

                        <Form.Item name="username" style={{margin:'0 0 1vh 0', width:'40vw', color:'#adadc2'}}>Объект договора</Form.Item>
                        <Input id='subject'/>

                        <Form.Item name="username" style={{margin:'0 0 1vh 0', width:'40vw', color:'#adadc2'}}>Клиент</Form.Item>
                        <Select id='client' style={{width:'100%', backgroundColor:'#ffffff'}} options={clients} onChange={handleChange}/>

                        <Form.Item name="username" style={{margin:'0 0 1vh 0', width:'40vw', color:'#adadc2'}}>Банковские реквизиты клиента</Form.Item>
                        <Select id='bic' style={{width:'100%'}} options={listReq} onChange={handleChangeee}/>

                        <Form.Item name="username" style={{margin:'0 0 1vh 0', width:'40vw', color:'#adadc2'}}>Ответственный</Form.Item>
                        <Select id='employee' style={{width:'100%'}} options={workers} onChange={handleChangee}/>

                        <Row style={{display:'flex', justifyContent:'start', margin:'1vh 0 0 0', height:'4vh'}}>
                            <Col span={2}><Form.Item name="username" style={{width:'40vw', color:'#adadc2'}}>Объем</Form.Item></Col>
                            <Col span={2} style={{margin:'1% 0 0 1vw'}}><Switch id='volume' onChange={onChangeSecond}/></Col>
                        </Row>
                        
                        <Row>
                            <Col span={6}><Form.Item name="username" style={{margin:'0 0 1vh 0', width:'40vw', color:'#adadc2'}}>Статус закрытия</Form.Item></Col>
                            <Col span={10} style={{margin:'1% 0 0 0', color:'#adadc2'}}>
                                <Row>
                                    <span>не закрыт</span>
                                    <Switch id='isEnd' style={{margin:'0 0 0 3%'}} onChange={onChangeFirst}/>
                                    <span style={{margin:'0 0 0 3%'}}>закрыт</span>
                                </Row>
                            </Col>
                        </Row>
                        
                    </div>
                    <div style={{width:'40%', display:'flex', justifyContent:'flex-start', flexDirection:'column', alignItems:'baseline'}}>
                        <Form.Item name="username" style={{margin:'0 0 1vh 0', width:'40vw', color:'#adadc2'}}>Дата вступления в силу</Form.Item>
                        <DatePicker id='startDate' style={{width:'20vw'}}/>

                        <Form.Item name="username" style={{margin:'0 0 1vh 0', width:'40vw', color:'#adadc2'}}>Дата окончания</Form.Item>
                        <DatePicker id='endDoingDate' style={{width:'20vw'}}/>

                        <Form.Item name="username" style={{margin:'0 0 1vh 0', width:'40vw', color:'#adadc2'}}>Еще какая-то дата</Form.Item>
                        <DatePicker id='endLifeDate' style={{width:'20vw'}}/>
                    </div>
                </div>
                </div>


            </div>

        </div>

    )

}

export default ContractInfoMain;