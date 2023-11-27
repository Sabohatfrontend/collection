import React from "react";
import { combineComponents } from "../utils/combineComponents";

import CategoryContextProvider from "./CategoryContext";
import CollectionContextProvider from "./CollectionContext";
import UserContextProvider from "./UserContext";

const providers = [
CategoryContextProvider,
CollectionContextProvider,
UserContextProvider
];

export const AppContextProvider = combineComponents(...providers);