import React from "react";
import { combineComponents } from "../utils/combineComponents";
import { AuthContextProvider } from "./AuthContext";

import CategoryContextProvider from "./CategoryContext";
import CollectionContextProvider from "./CollectionContext";


const providers = [
    AuthContextProvider,
    CategoryContextProvider,
    CollectionContextProvider,

];

export const AppContextProvider = combineComponents(...providers);