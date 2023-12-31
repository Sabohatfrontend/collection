import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN': {
            return { token: action.payload }
        }
        case 'LOGOUT': {
            return { token: null }
        }
        default: return state;
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, { token: null });

    useEffect(() => {
        const token = window.localStorage.getItem('x-auth-token');
        if (token) {
            dispatch({
                type: 'LOGIN', payload: token
            })
        }
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}
