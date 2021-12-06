import React from 'react';
import {clearAuthentication, setAuthentication} from "../api/localStorage";

let initialState = {
    isSignedIn: false,
    username: null,
    userType: null,
    userId: null,
    token: null,
    expireDate: null
};

export const AuthContext = React.createContext(initialState);

const authReducer = (state, action) => {
    const { payload } = action;
    console.log("REDUCER CALLED: " + action.type)
    console.log(payload)
    switch (action.type) {
        case "LOGIN":
            setAuthentication(payload);
            return {
                ...state,
                isSignedIn: true,
                username: payload.username,
                userType: payload.userType,
                userId: payload.userId,
                token: payload.token,
                expireDate: payload.expireDate
            };
        case "LOGOUT":
            clearAuthentication()
            return {
                ...state,
                isSignedIn: false,
                username: null,
                userType: null,
                userId: null,
                token: null,
                expireDate: null
            };
        case "REFRESH":
            return {
                ...state,
                isSignedIn: payload.isSignedIn,
                username: payload.username,
                userType: payload.userType,
                userId: payload.userId,
                token: payload.token,
                expireDate: payload.expireDate
            }
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
