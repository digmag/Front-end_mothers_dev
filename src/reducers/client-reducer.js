const GET_LIST_OF_CLIENTS = "GET_LIST_OF_CLIENTS";
const GET_CLIENT_INFO = "GET_CLIENT_INFO";
const GET_BIC = "GET_BIC";
const CREATE_CLIENT = "CREATE_CLIENT";
const GET_OPF = "GET_OPF";
const GET_REQUISITES = "GET_REQUISITES";
const GET_CLIENTS_SIMPLE = "GET_CLIENTS_SIMPLE";

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
    clientInfo: {
        address: "",
        ceoFullName: "",
        ceoStatus: "",
        comment: "",
        cpp: "",
        email: "",
        faceType: "",
        fullName: "",
        id: "",
        inn: "",
        opf: "",
        phone: "",
        shortName: "",
        requisites: [
            {
                bic: "",
                id: "",
                requisite: ""
            }
        ]

    },
    bic: [],
    opf: [],
    requisites:[{
        id:"",
        bic:"",
        requisite:""
    }],
    clientsSimple:[]

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

        case CREATE_CLIENT:
            newState.clients = [...newState.clients, action.data];
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

        case GET_OPF:

            const opfList = action.data;
            newState.opf = [];
            opfList.forEach(e => {
                newState.opf.push({
                    value: e.id,
                    label: e.name
                })
            })
            return newState;
        case GET_REQUISITES:

            newState.requisites =[...action.requisites]
            return newState;
            
        case GET_CLIENTS_SIMPLE:
            const arrayy = []
            action.payload.forEach(el => {
                arrayy.push({value:el.id, label:el.name})
            })
            newState.clientsSimple = arrayy;
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

export function createClientActionCreator(data) {
    return { type: CREATE_CLIENT, data: data }
}

export function getOpfActionCreator(data) {
    return { type: GET_OPF, data: data }
}

export function getRequisitesActionCreator(requisites){
    return{type: GET_REQUISITES, requisites: requisites}
}

export function getClientsSimpleActionCreator(payload){
    return {type: GET_CLIENTS_SIMPLE, payload: payload}
}

export default clientReducer;