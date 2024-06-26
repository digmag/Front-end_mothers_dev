function PirceListContract(props){
    const conSumm = (sum) => {
        const s = String(sum).split(".");
        return `${s[0]}.${s[1].slice(0,2)}`
    }
    return(
        <div className='clientInfoBlock mt-4 mx-5'>
            <div>{props.name}</div>
            <div>Всего: {props.count}</div>
            <div>Сделано: {props.done}</div>
            <div>Цена: {conSumm(props.price)}</div>
            <div>Сумма: {conSumm(props.sum)}</div>
        </div>
    )
}

export default PirceListContract;