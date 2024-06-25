const GET_LIST_OF_CLIENTS = "GET_LIST_OF_CLIENTS";

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
    count: 0

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

        default:
            return newState;
    }
}

export function getListOfClientsActionCreator(payload) {
    return { type: GET_LIST_OF_CLIENTS, payload: payload }
}

export default clientReducer;