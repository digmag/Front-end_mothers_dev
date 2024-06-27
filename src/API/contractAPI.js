import { getListOfContractsActionCreator, createContractActionCreator, deleteContractActionCreator, getConcreteContractActionCreator, getPricesForContractActionCreator, addPricesForContractActionCreator } from "../reducers/contract-reducer";

const url = '84.201.140.78';

const getListOfContracts = () => {
    return dispatch => fetch(`http://${url}:8083/api/document/contract`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).then(response => {
        if (!response.ok) {
            console.log(response);
            throw new Error('Не удалось получить список договоров')
        }
        console.log("Успешно получен список договоров")
        return response.json()
    }).then(data => {
        dispatch(getListOfContractsActionCreator(data));
    }).catch(error => console.log(error))
}

const createContract = (data) =>{
    return dispatch => fetch(`http://${url}:8083/api/document/contract/create`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (!response.ok) {
            throw new Error('Не удалось получить список договоров')
        }
        return response.json()
    }).then(data => {
        dispatch(createContractActionCreator(data));
    }).catch(error => console.log(error))
}

const deleteContract = (id) =>{
    return dispatch => fetch(`http://${url}:8083/api/document/contract/delete/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
    }).then(response => {
        if (!response.ok) {
            throw new Error('Не удалось получить список klkjkbhvgcfchvbjnkljhjgf')
        }
        return response.text()
    }).then(data => {
        dispatch(deleteContractActionCreator(id));
    }).catch(error => console.log(error))
}

const getConcreteContract = (id) => {
    return dispatch => fetch(`http://${url}:8083/api/document/contract/${id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).then(response => {
        if (!response.ok) {
            console.log(response);
            throw new Error('Не удалось получить список jkhjvghcfghvjbknl')
        }
        return response.json()
    }).then(data => {
        dispatch(getConcreteContractActionCreator(data));
    }).catch(error => console.log(error))
}

const getPrices = (name) =>{
    return dispatch => fetch(`http://${url}:8083/api/document/price?name=${name}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).then(response => {
        if (!response.ok) {
            console.log(response);
            throw new Error('Не удалось получить список jkhjvghcfghvjbknl')
        }
        return response.json()
    }).then(data => {
        dispatch(getPricesForContractActionCreator(data));
    }).catch(error => console.log(error))
}
const addPrice = (body) =>{
    return dispatch => fetch(`http://${url}:8083/api/document/price`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body:JSON.stringify(body)
    }).then(response => {
        if (!response.ok) {
            console.log(response);
            throw new Error('Не удалось получить список jkhjvghcfghvjbknl')
        }
        return response.json()
    }).then(data => {
        dispatch(addPricesForContractActionCreator(data));
    }).catch(error => console.log(error))
}

export const contractAPI = {
    getListOfContracts: getListOfContracts,
    createContract: createContract,
    deleteContract: deleteContract,
    getConcreteContract: getConcreteContract,
    getPrices:getPrices,
    addPrice:addPrice
}

