import { Row, Col, Input, Button, Checkbox } from "antd";
import checkBoxGrey from '../images/checkbox_grey.svg'
import magn from '../images/magnifier.svg'
import f from '../images/Rectangle132.svg'
import s from '../images/Rectangle133.svg'
import t from '../images/Rectangle139.svg'

function Filters(){
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
                    <Button type="primary" style={styleButton}>Добавить договор</Button>
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
        </div>
    )
}

const styleButton ={
    fontSize:'medium', 
    backgroundColor:'#376EDA', 
    height:'4vh'
}

export default Filters;