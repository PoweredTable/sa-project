import React from 'react'
import { useState } from 'react';

import './Searchbar.css'

const Searchbar = () => {
    const [searchText, setSearchText] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('Livros');
    const filters = ['Livros', 'Gêneros', 'Autores']; 

    const handleFilterChange = (e) => {
        setSelectedFilter(e.target.value);
    };

    const handleChange = (e) => {
        const text = e.target.value;
        setSearchText(text);
    };
    return (
        <div className='search-bar'>
            <div className='search-left'>
                <select value={selectedFilter} onChange={handleFilterChange}>
                    {filters.map((filter, index) => (
                        <option key={index} value={filter}>
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
                <button>
                    Buscar
                </button>
            </div>

        </div>
    );
}

export default Searchbar