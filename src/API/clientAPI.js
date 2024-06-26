import { createClientActionCreator, getBicActionCreator, getClientInfoActionCreator, getListOfClientsActionCreator, getOpfActionCreator } from "../reducers/client-reducer";

const url = '84.201.140.78';

const getListOfClients = (page) => {
    return dispatch => fetch(`http://${url}:8083/api/client/list?page=${page}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).then(response => {
        if (!response.ok) {
            console.log(response);
            throw new Error('Не удалось получить список клиентов')
        }
        console.log("Успешно получен список клиентов")
        return response.json()
    }).then(data => {
        console.log(data);
        dispatch(getListOfClientsActionCreator(data));
    }).catch(error => console.log(error))
}

const createClient = (body) => {
    return dispatch => fetch(`http://${url}:8083/api/client/create`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(body)
    }).then(response => {
        if (!response.ok) {
            console.log(response);
            throw new Error('Не удалось создать клиента')
        }
        console.log("Успешно создан клиент")
        alert("Клиент был успешно создан");
        return response.json()
    }).then(data => {
        console.log(data);
        dispatch(createClientActionCreator(data));
    }).catch(error => console.log(error));
}

const getClientInfo = (id) => {
    return dispatch => fetch(`http://${url}:8083/api/client/${id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).then(response => {
        if (!response.ok) {
            console.log(response);
            throw new Error('Не удалось получить инфу о клиенте')
        }
        console.log("Успешно получена инфа о клиенте")
        return response.json()
    }).then(data => {
        console.log(data);
        dispatch(getClientInfoActionCreator(data));
    }).catch(error => console.log(error))
}

const getBicId = () => {
    return dispatch => fetch(`http://${url}:8083/api/client/bic`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).then(response => {
        if (!response.ok) {
            console.log(response);
            throw new Error('Не удалось получить список бик')
        }
        console.log("Успешно получен список бик")
        return response.json()
    }).then(data => {
        console.log(data);
        dispatch(getBicActionCreator(data));
    }).catch(error => console.log(error))
}

const getOpfId = () => {
    return dispatch => fetch(`http://${url}:8083/api/client/opf`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).then(response => {
        if (!response.ok) {
            console.log(response);
            throw new Error('Не удалось получить список опф')
        }
        console.log("Успешно получен список опф")
        return response.json()
    }).then(data => {
        console.log(data);
        dispatch(getOpfActionCreator(data));
    }).catch(error => console.log(error))
}

const addOpf = (body) => {
    return dispatch => fetch(`http://${url}:8083/api/client/opf`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(body)
    }).then(response => {
        if (!response.ok) {
            console.log(response);
            throw new Error('Не удалось создать опф')
        }
        console.log("Успешно создан опф")
        alert("ОПФ была успешно создана");
        return response.json()
    }).then(data => {
        console.log(data);
        //dispatch(createClientActionCreator(data));
    }).catch(error => console.log(error));
}

export const clientAPI = {
    getListOfClients: getListOfClients,
    createClient: createClient,
    getClientInfo: getClientInfo,
    getBicId: getBicId,
    getOpfId: getOpfId,
    addOpf: addOpf

}