import { getListOfContractsActionCreator } from "../reducers/contract-reducer";

const url = '158.160.64.66';

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

export const contractAPI = {
    getListOfContracts: getListOfContracts
}

