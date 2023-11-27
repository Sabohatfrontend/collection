import { useContext } from "react"
import { CategoryContext } from '../context/CategoryContext';

export const useCategoryContext = () => {
    const context = useContext(CategoryContext);

    if (!context) {
        throw Error('useCategoryContext must be used inside an CategoryContextProvider')
    }

    return context;
}