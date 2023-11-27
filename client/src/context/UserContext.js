import { createContext, useReducer } from "react";

export const UserContext = createContext();

export const userReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER': return {
            user: action.payload
        }
        case 'CREATE_USER': return {
            user: [action.payload, ...state.user]
        }

        case 'DELETE_USER': return {
            user: state.user.filter((c) => c._id !== action.payload._id)
        }
        default: return state
    }
}


export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, { user: null });

    return (
        <UserContext.Provider value={{ ...state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;