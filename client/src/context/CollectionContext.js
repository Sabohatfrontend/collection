import { createContext, useReducer } from "react";

export const CollectionContext = createContext();

export const collectionReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS': return {
            collection: action.payload
        }
        case 'CREATE_WORKOUT': return {
            collection: [action.payload, ...state.collection]
        }

        case 'DELETE': return {
            collection: state.collection.filter((c) => c._id !== action.payload._id)
        }
        default: return state
    }
}

export const CollectionContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(collectionReducer, { collection: null })

    return (
        <CollectionContext.Provider value={{ ...state, dispatch }}>
            {children}
        </CollectionContext.Provider>
    )
}

export default CollectionContextProvider;