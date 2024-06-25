const GET_LIST_OF_CLIENTS = "GET_LIST_OF_CLIENTS";
const GET_CLIENT_INFO = "GET_CLIENT_INFO";
const GET_BIC = "GET_BIC";

const initialClientState = {

    clients: [
        {
            id: "",
            faceType: "",
            fullName: "",
            ceoFullName: "",
            inn: "",
            phone: "",
            email: ""
        }
    ],
    page: 0,
    count: 0,
    clientInfo: {},
    bic: []

}

const clientReducer = (state = initialClientState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case GET_LIST_OF_CLIENTS:
            newState.clients = action.payload.clients;
            newState.page = action.payload.page;
            newState.count = action.payload.count;
            console.log("вывод из редюсера ");
            return newState;

        case GET_CLIENT_INFO:
            newState.clientInfo = action.data;
            return newState;

        case GET_BIC:

            const bicList = action.data;
            newState.bic = [];
            bicList.forEach(e => {
                newState.bic.push({
                    value: e.code,
                    label: e.bankName
                })
            })
            return newState;

        default:
            return newState;
    }
}

export function getListOfClientsActionCreator(payload) {
    return { type: GET_LIST_OF_CLIENTS, payload: payload }
}

export function getClientInfoActionCreator(data) {
    return { type: GET_CLIENT_INFO, data: data }
}

export function getBicActionCreator(data) {
    return { type: GET_BIC, data: data }
}

export default clientReducer;