const LOGIN = "LOGIN";
const REGISTR = "REGISTR";
const WORKERS = "WORKERS"

const initialUserState = {
    isAuth: 0,
    workers:[{
        id: "",
        fullName: "",
        email: "",
        status: "",
        admin: false,
        verification: false
    }]
}

const userReducer = (state = initialUserState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case LOGIN:
            newState.isAuth = 1;
            return newState;
        case WORKERS:
            const arrayy = []
            action.workers.forEach(el => {
                arrayy.push({value:el.id, label:el.fullName})
            })
            newState.workers = arrayy;
            return newState;
        default:
            return newState;
    }
}

export function loginActionCreator() {
    return { type: LOGIN }
}

export function workersActionCreator(workers){
    return{type:WORKERS, workers:workers}
}


export default userReducer;