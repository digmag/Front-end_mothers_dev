const LOGIN = "LOGIN";
const IS_ADMIN = "IS_ADMIN";
const STATUS_LIST = "STATUS_LIST";
const ADD_STATUS = "ADD_STATUS";

const initialUserState = {
    isAuth: 0,
    isAdmin: 0,
    statusList: [

    ]
}

const userReducer = (state = initialUserState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case LOGIN:
            newState.isAuth = 1;
            return newState;

        case IS_ADMIN:
            if (action.data === "false") {
                newState.isAdmin = false;
            }
            else {
                newState.isAdmin = true;
            }

            return newState;

        case STATUS_LIST:
            const status = action.data;
            newState.statusList = [];
            status.forEach(e => {
                newState.statusList.push({
                    value: e.id,
                    label: e.status
                })
            })
            return newState;

        case ADD_STATUS:
            newState.statusList = [...newState.statusList, { ...action.data }];
            return newState;


        default:
            return newState;
    }
}

export function loginActionCreator() {
    return { type: LOGIN }
}

export function isAdminActionCreator(data) {
    return { type: IS_ADMIN, data: data }
}

export function statusListActionCreator(data) {
    return { type: STATUS_LIST, data: data }
}

export function addStatusActionCreator(data) {
    return { type: ADD_STATUS, data: data }
}


export default userReducer;