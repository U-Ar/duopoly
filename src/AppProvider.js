import React, { useReducer, useEffect } from "react";

import { getCookie } from "./utils";

const appReducer = (state, action) => {
    switch (action.type) {
        case "SET_AUTHENTICATED":
            return { ...state, authenticated: action.payload };
        case "SET_USER":
            return { ...state, user: action.payload };
        default:
            return state;
    }
}



const initialState = {
    authenticated: false,
    user: null,
};

export const AppContext = React.createContext({
    authenticated: false,
    user: null,
});


const AppProvider = ({ children }) => {
    const [appState, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppContext.Provider value={{ appState, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};


export default AppProvider;