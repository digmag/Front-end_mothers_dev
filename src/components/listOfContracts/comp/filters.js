import { Button, Form, Input, Select, DatePicker, Row, Col, Modal, Switch } from 'antd';import checkBoxGrey from '../images/checkbox_grey.svg'
import magn from '../images/magnifier.svg'
import f from '../images/Rectangle132.svg'
import s from '../images/Rectangle133.svg'
import t from '../images/Rectangle139.svg'
import React, {useState} from "react";

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

            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} style={{minWidth:'80vw'}}>
                <h1>Создание договора</h1>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div style={{width:'40%'}}>
                        <Form.Item name="username" style={{margin:'0 0 1vh 0', width:'40vw', color:'#adadc2'}}>Номер договора</Form.Item>
                        <Input id='number'/>

                        <Form.Item name="username" style={{margin:'0 0 1vh 0', width:'40vw', color:'#adadc2'}}>Тема</Form.Item>
                        <Input id='subject'/>

                        <Form.Item name="username" style={{margin:'0 0 1vh 0', width:'40vw', color:'#adadc2'}}>Клиент</Form.Item>
                        <Select id='client'/>

                        <Form.Item name="username" style={{margin:'0 0 1vh 0', width:'40vw', color:'#adadc2'}}>Заказчик</Form.Item>
                        <Select id='employee'/>

                        <Form.Item name="username" style={{margin:'0 0 1vh 0', width:'40vw', color:'#adadc2'}}>БИК</Form.Item>
                        <Select id='bic'/>

                        <Row style={{display:'flex', justifyContent:'center'}}>
                            <Col><Form.Item name="username" style={{margin:'0 0 0 0', width:'40vw', color:'#adadc2'}}>volume</Form.Item></Col>
                            <Col><Switch id='volume'/></Col>
                            
                        </Row>
                        

                        <Form.Item name="username" style={{margin:'0 0 1vh 0', width:'40vw', color:'#adadc2'}}>Статус закрытия</Form.Item>
                        <span style={{margin:'0 1vw 0 0 0'}}>не закрыт</span>
                        <Switch id='isEnd'/>
                        <span>закрыт</span>
                    </div>
                    <div style={{width:'40%', display:'flex', justifyContent:'flex-start', flexDirection:'column', alignItems:'baseline'}}>
                        <Form.Item name="username" style={{margin:'0 0 1vh 0', width:'40vw', color:'#adadc2'}}>Дата вступления в силу</Form.Item>
                        <DatePicker id='startDate'/>

                        <Form.Item name="username" style={{margin:'0 0 1vh 0', width:'40vw', color:'#adadc2'}}>Дата окончания</Form.Item>
                        <DatePicker id='endDoingDate'/>

                        <Form.Item name="username" style={{margin:'0 0 1vh 0', width:'40vw', color:'#adadc2'}}>Еще какая-то дата</Form.Item>
                        <DatePicker id='endLifeDate'/>
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