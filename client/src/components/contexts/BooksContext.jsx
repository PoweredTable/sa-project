import React, { createContext, useState } from "react";

export const BooksContext = createContext(null);

export const BooksContextProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    const value = {
        books, setBooks
    };

    return (
        <BooksContext.Provider value={value}> {children} </BooksContext.Provider>
    );
};