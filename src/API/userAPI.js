const login = (body) => {
    return dispatch => fetch('http://158.160.91.152:8081/api/account/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => {
        if (!response.ok) {
            console.log(response);
            throw new Error('Не удалось залогиниться')
        }
        console.log("Успешно залогинились")
        return response.json()
    })
}

const registration = (body) => {
    return dispatch => fetch('http://158.160.91.152:8081/api/account/registration', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => {
        if (!response.ok) {
            console.log(response);
            throw new Error('Не удалось зарегистрироваться')
        }
        console.log("Успешно зарегались")
        return response.text()
    })
}

const varification = (id) => {
    return dispatch => fetch(`http://158.160.91.152:8081/api/account/verification/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (!response.ok) {
            console.log(response);
            throw new Error('Не удалось подтвердить учетную запись')
        }
        console.log("Успешно подтвердили учетную запись")
        return response.text()
    }).catch(error => console.log(error))
}

export const userAPI = {
    login: login,
    registration: registration,
    varification: varification
}