import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

// import { BooksContext } from './contexts/BooksContext';
// import { useContext } from 'react';

import api from '../services/api'
import './Searchbar.css'

const Searchbar = () => {
    // const {setBooks} = useContext(BooksContext)
    const [searchText, setSearchText] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('Livros');
    const [currentFilter, setCurrentFilter] = useState('Livros');
    const filters = ['Livros', 'Gêneros', 'Autores'];

    const handleFilterChange = (e) => {
        setSelectedFilter(e.target.value);
        setCurrentFilter(e.target.value);
    };

    const handleChange = (e) => {
        const text = e.target.value;
        setSearchText(text);
    };

    const search = async () => {
        if (searchText === "") {
            return
        }

        try {
            if (currentFilter === "Livros") {
                const response = await api.getBookByName(searchText)

            } else if (currentFilter === "Gêneros") {
                const response = await api.getBookByGenreName(searchText)

            } else if (currentFilter === "Autores") {
                const response = await api.getBookByAuthorName(searchText)
            }
            console.log(response.data.result)
            // setBooks(response.data.result)

        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='search-bar'>
            <div className='search-left'>
                <select className="selectSearchBar" value={selectedFilter} onChange={handleFilterChange}>
                    {filters.map((filter, index) => (
                        <option className='optionSelectSearchBar' key={index} value={filter}>
                            {filter}
                        </option>
                    ))}
                </select>
            </div>

            <div className='search-middle'>
                <input
                    type="text"
                    value={searchText}
                    onChange={handleChange}
                    placeholder="Buscar em LEW|BOOKS"
                />
            </div>

            <div className='search-right'>
                {/* IMPORTANTE: é redirecionado para books mesmo que esteja vazio */}
                <Link to='/books'>
                <button onClick={search}>
                    <svg className="svgLupa" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                        <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 19.585938 21.585938 C 20.137937 22.137937 21.033938 22.137938 21.585938 21.585938 C 22.137938 21.033938 22.137938 20.137938 21.585938 19.585938 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z" />
                    </svg>
                </button>
                </Link>
            </div>
        </div>
    );
};

export default Searchbar