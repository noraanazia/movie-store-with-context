import React, { createContext, useState, useEffect } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState(() => {
        const savedMovies = localStorage.getItem('movies');
        return savedMovies ? JSON.parse(savedMovies) : [];
    });

    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(movies));
    }, [movies]);

    const getCurrentDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        return `${dd}-${mm}-${yyyy}`;
    }

    const addMovie = (title, imageUrl, cost) => {
        setMovies([...movies, { title, imageUrl, releaseDate: getCurrentDate(), cost, id: Date.now() }]);
    };

    const removeMovie = id => {
        setMovies(movies.filter(movie => movie.id !== id));
    };

    return (
        <MovieContext.Provider value={{ movies, addMovie, removeMovie }}>
            {children}
        </MovieContext.Provider>
    );
};
