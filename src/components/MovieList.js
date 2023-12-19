import React, { useState, useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import Movie from './Movie';
import MovieModal from './MovieModal';
import './MovieList.css';

const MovieList = () => {
    const { movies, removeMovie } = useContext(MovieContext);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    };

    const handleCloseModal = () => {
        setSelectedMovie(null);
    };

    return (
        <div className="movie-list">
			{movies.map(movie => (
                <div className="movie-item">
                <Movie key={movie.id} movie={movie} onClick={handleMovieClick} onRemove={removeMovie} />
				</div>
            ))}
            <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
        </div>
    );
};

export default MovieList;
