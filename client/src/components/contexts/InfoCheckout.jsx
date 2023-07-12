import React, { createContext, useState } from "react";

export const CheckoutContext = createContext(null);

export const CheckoutContextProvider = ({ children }) => {
    const [info, setInfo] = useState();

    const value = {
        info, setInfo
    };

    return (
        <CheckoutContext.Provider value={value}> {children} </CheckoutContext.Provider>
    );
};