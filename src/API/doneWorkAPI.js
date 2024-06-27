import { makeDoneWorkActionCreator } from "../reducers/contract-reducer";
import { doneWorkActionCreator } from "../reducers/done-work";

const url = process.env.REACT_APP_API_URL
const getDoneWork = (start, end) => {
    return dispatch => fetch(`http://${url}:8083/api/document/report?start=${start}&end=${end}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }).then(response => {
        if (!response.ok) {
            throw new Error("Не удалось получить отчет");
        }
        return response.json();
    }).then(data => {
        dispatch(doneWorkActionCreator(data));
    }).catch(error => console.log(error));
}

const setDownWork = (id) => {
    return dispatch => fetch(`http://${url}:8083/api/document/contract/done/${id}`,{
        method:"PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }).then(response => {
        if (!response.ok) {
            throw new Error("Не удалось получить отчет");
        }
        return response.json();
    }).then(data=>{
        dispatch(makeDoneWorkActionCreator(data));
    }).catch(error=> console.log(error));
}

const doneWorkAPI = {
    getDoneWork: getDoneWork,
    setDownWork:setDownWork
}

export default doneWorkAPI;