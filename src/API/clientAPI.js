
const url = '158.160.23.147';

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
        dispatch(getListOfClients(data));
        console.log(data);
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
        return response.json()
    }).catch(error => console.log(error));
}

export const clientAPI = {
    getListOfClients: getListOfClients,
    createClient: createClient

}