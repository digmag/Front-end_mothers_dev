import { addStatusActionCreator, isAdminActionCreator, loginActionCreator, statusListActionCreator, workersActionCreator } from "../reducers/user-reducer";

const url = '84.201.140.78';

const login = (body, navigate) => {
    return dispatch => fetch(`http://${url}:8081/api/account/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => {
        if (!response.ok) {
            console.log(response);
            alert("Неправильный логин или пароль");
            throw new Error('Не удалось залогиниться')
        }
        console.log("Успешно залогинились")
        return response.json()
    }).then(data => {
        localStorage.setItem("token", data.token);
        dispatch(loginActionCreator());
        navigate("/clients");
    }).catch(error => console.log(error));
}

const registration = (body) => {
    return dispatch => fetch(`http://${url}:8081/api/account/registration`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => {
        if (!response.ok) {
            console.log(response);
            alert("Не удалось зарегистрироваться");
            throw new Error('Не удалось зарегистрироваться')
        }
        return response.text()
    })
}

const varification = (id) => {
    return dispatch => fetch(`http://${url}:8081/api/account/verification/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (!response.ok) {
            console.log(response);
            alert("Не удалось подтвердить учетную запись");
            throw new Error('Не удалось подтвердить учетную запись')
        }
        return response.text()
    }).catch(error => console.log(error))
}

const recoverEmail = (body) => {
    return dispatch => fetch(`http://${url}:8081/api/account/recover`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => {
        if (!response.ok) {
            console.log(response);
            alert("Не удалось отправить восстановление на емаил");
            throw new Error('Не удалось отправить восстановление на емаил')
        }
        return response.text()
    }).catch(error => console.log(error))
}

const recoverPassword = (body, id) => {
    return dispatch => fetch(`http://${url}:8081/api/account/recover/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => {
        if (!response.ok) {
            console.log(response);
            alert("Не удалось изменить пароль");
            throw new Error('Не удалось изменить пароль')
        }
        return response.text()
    }).catch(error => console.log(error))
}

const getStatus = () => {
    return dispatch => fetch(`http://${url}:8081/api/account/status`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (!response.ok) {
            console.log(response);
            throw new Error('Не удалось получить должности')
        }
        console.log("Успешно получили должности")
        return response.json()
    }).then(data => {
        dispatch(statusListActionCreator(data));
    }).catch(error => console.log(error))
}

const isAdmin = () => {
    return dispatch => fetch(`http://${url}:8081/api/account/isAdmin`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).then(response => {
        if (!response.ok) {
            console.log(response);
            throw new Error('Не получили инфу, админ или нет')
        }
        return response.text()
    }).then(data => {
        dispatch(isAdminActionCreator(data));
    }).catch(error => console.log(error))
}

const addStatus = (body) => {
    return dispatch => fetch(`http://${url}:8081/api/account/add/status`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(body)
    }).then(response => {
        if (!response.ok) {
            console.log(response);
            throw new Error('Не удалось добавить должность')
        }
        console.log("Успешно добавлена должность")
        return response.json()
    }).then(data => {
        dispatch(addStatusActionCreator(data));
    }).catch(error => console.log(error))
}

const editStatus = (body, id) => {
    return dispatch => fetch(`http://${url}:8081/api/account/add/status/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(body)
    }).then(response => {
        if (!response.ok) {
            console.log(response);
            throw new Error('Не удалось изменить должность')
        }
        return response.text()
    }).catch(error => console.log(error))
}
const getEmployees = () => {
    return dispatch => fetch(`http://${url}:8081/api/account/workers`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).then(response => {
        if (!response.ok) {
            console.log(response);
            throw new Error('Не удалось получить должности')
        }
        console.log("Успешно получили должности")
        return response.json()
    }).then(data => {
        dispatch(workersActionCreator(data));
    }).catch(error => console.log(error))
}

export const userAPI = {
    login: login,
    registration: registration,
    varification: varification,
    recoverEmail: recoverEmail,
    recoverPassword: recoverPassword,
    getStatus: getStatus,
    isAdmin: isAdmin,
    addStatus: addStatus,
    editStatus: editStatus,
    getEmployees: getEmployees
}