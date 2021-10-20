import React from 'react';

let initialState = {
    isSignedIn: false,
    username: null,
    userType: null
};

export const AuthContext = React.createContext(initialState);

const authReducer = (state, action) => {
    const { payload } = action;

    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isSignedIn: true,
                username: payload.username,
                userType: payload.userType
            };
        case "LOGOUT":
            return {
                ...state,
                isSignedIn: false,
                username: null,
                userType: null
            };
        default:
            return state;
    }
};

export const AuthStore = (props) => {
    const [state, dispatch] = React.useReducer(authReducer, initialState)
    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default { AuthContext, AuthStore };
