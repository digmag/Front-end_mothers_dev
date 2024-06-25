import { getListOfClientsActionCreator } from "../reducers/client-reducer";

const url = '158.160.87.248';

const getListOfClients = (page) => {
    return dispatch => fetch(`http://${url}:8083/api/client/list?page=${page}`, {
        method: "POST",
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
        //dispatch(getListOfClientsActionCreator(data));
    }).catch(error => console.log(error))
}

export const clientAPI = {
    getListOfClients: getListOfClients,
    createClient: createClient,
    getClientInfo: getClientInfo

}