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
    count: 1

}

const clientReducer = (state = initialClientState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case GET_LIST_OF_CLIENTS:
            newState = { ...action.payload }
            console.log(newState);
            return newState;

        default:
            return newState;
    }
}

export function getListOfClients(payload) {
    return { type: GET_LIST_OF_CLIENTS, payload: payload }
}

export default clientReducer;