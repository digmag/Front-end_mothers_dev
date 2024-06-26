import { Button, Form, Input, Select, DatePicker, Row, Col, Modal, Switch } from 'antd';import checkBoxGrey from '../images/checkbox_grey.svg'
import magn from '../images/magnifier.svg'
import f from '../images/Rectangle132.svg'
import s from '../images/Rectangle133.svg'
import t from '../images/Rectangle139.svg'
import React, {useEffect, useState, useCallback} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {clientAPI} from '../../../API/clientAPI'
import { userAPI } from '../../../API/userAPI';
import { contractAPI } from '../../../API/contractAPI';

function Filters(){

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const onChangeFirst = (checked) => {
        setIsEnd(checked);
    };
    const [isEnd, setIsEnd] = useState('');

    const onChangeSecond = (checked) => {
        setVolume(checked);
    };
    const [volume, setVolume] = useState('');
    const dispatch = useDispatch();

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


    const addContract = () => {
        const requestBody = {
            number: document.querySelector('#number').value,
            clientId: clientId,
            bankCode: bankCode,
            volume: volume,
            price: document.querySelector('#price').value,
            startDate: document.querySelector('#startDate').value,
            endDoingDate: document.querySelector('#endDoingDate').value,
            endLifeDate: document.querySelector('#endLifeDate').value,
            subject: document.querySelector('#subject').value,
            employeeId: employeeId,
            isEnd: isEnd,
            pricePositions:[
                {
                    "id":"615c5fc8-6502-4d88-ac85-aee9ad3bee3b",
                    "count":2
                }
            ]
        }
        console.log(requestBody);
        dispatch(contractAPI.createContract(requestBody))
        dispatch(contractAPI.getListOfContracts())
        setIsModalOpen(false);
    }

    return(
        <div>
            <Row>
                <Col span={4}>
                    <Row>
                        <img src={checkBoxGrey} alt="checkBoxGrey"/>
                        <div style={{color:'#90939A', margin:'1% 0 0 1vw', fontSize:'medium'}}> - закончено</div>
                    </Row>
                </Col>
                <Col span={4}>
                    <Row>
                        <img src={checkBoxGrey} alt="checkBoxGrey"></img>
                        <div style={{color:'#90939A', margin:'1% 0 0 1vw', fontSize:'medium'}}><span> - не закончено</span></div>
                    </Row>
                </Col>
                <Col span={12}>
                    <Row>
                        <Input style={{width:'20vw', backgroundColor:'#E4ECFC', border:'0'}}/>
                        <Button type="primary" style={{margin:'0 0 0 1vw', ...styleButton}}><img src={magn} alt="magn"/>Поиск</Button>
                    </Row>
                </Col>
                <Col span={4} style={{display:'flex', justifyContent:'end'}}>
                    <Button type="primary" style={styleButton} onClick={showModal}>Добавить договор</Button>
                </Col>
            </Row>
            <Row style={{margin:'2vh 0 0 0'}}>
                <Col span={3}>
                    <Row>
                        <img src={f} alt="f"/>
                        <div style={{color:'#90939A', margin:'1% 0 0 1vw', fontSize:'medium'}}><span>- незаконченные</span></div>
                    </Row>
                </Col>
                <Col span={3}>
                    <Row>
                        <img src={s} alt="s"/>
                        <div style={{color:'#90939A', margin:'1% 0 0 1vw', fontSize:'medium'}}><span>- законченные</span></div>
                    </Row>
                </Col>
                <Col span={3}>
                    <Row>
                        <img src={t} alt="t"/>
                        <div style={{color:'#90939A', margin:'1% 0 0 1vw', fontSize:'medium'}}><span>- просроченные</span></div>
                    </Row>
                </Col>
            </Row>

            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} style={{minWidth:'80vw'}} footer={[<Button type='primary' style={{backgroundColor:'#376EDA'}} onClick={addContract}>Создать договор</Button>]}>
                <h1>Создание договора</h1>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div style={{width:'40%'}}>
                        <Form.Item name="username" style={{margin:'0 0 1vh 0', width:'40vw', color:'#adadc2'}}>Номер договора</Form.Item>
                        <Input id='number'/>

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
            </Modal>
        </div>
    )
}

const styleButton ={
    fontSize:'medium', 
    backgroundColor:'#376EDA', 
    height:'4vh'
}

export default Filters;