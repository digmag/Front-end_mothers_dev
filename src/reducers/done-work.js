const GET_DONE_WORK = "GET_DONE_WORK";

const initialState = {
    employeeReports: [
        {
            fullName: "",
            contractReport: [],
            sum: 0.0
        }
    ],
    sum: 0.0
}

const doneWorkRedicer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type){
        case GET_DONE_WORK:
            newState = {...action.payload};
            return newState;
        default:
            return newState;
    }
}
export default doneWorkRedicer;

export function doneWorkActionCreator(payload){
    return {type:GET_DONE_WORK, payload: payload}
}