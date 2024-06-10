const LOGIN = "LOGIN";
const REGISTR = "REGISTR";

const initialUserState = {
    isAuth: 0
}

const userReducer = (state = initialUserState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case LOGIN:
            newState.isAuth = 1;
            return newState;

        default:
            return newState;
    }
}

export function loginActionCreator() {
    return { type: LOGIN }
}


export default userReducer;