import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import doneWorkAPI from "../../../API/doneWorkAPI";

function PirceListContract(props){
    const dispatch= useDispatch();
    const conSumm = (sum) => {
        const s = String(sum).split(".");
        return `${s[0]}.${s[1].slice(0,2)}`
    }
    const click = () =>{
        if(props.count>props.done){
            dispatch(doneWorkAPI.setDownWork(props.id))
        }
    }
    return(
        <div className='clientInfoBlock mt-4 mx-5'>
            <div>{props.name}</div>
            <div>Всего: {props.count}</div>
            <div>Сделано: {props.done}</div>
            <div>Сумма: {props.sum}</div>
            <div>Цена: {props.price}</div>
            <Button onClick={click}>Выполнить</Button>
        </div>
    )
}

export default PirceListContract;