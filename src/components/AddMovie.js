import React, { useState, useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import './AddMovie.css';

const AddMovie = () => {
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [cost, setCost] = useState('');
    const { addMovie } = useContext(MovieContext);

    const handleSubmit = (e) => {
        e.preventDefault();
		addMovie(title, imageUrl, releaseDate, cost);
        setTitle('');
        setImageUrl('');
        setReleaseDate('');
        setCost('');
    };

    return (
        <div className="add-movie-container">
            <h2>Sample Food App with Context</h2>
            <form onSubmit={handleSubmit} className="add-movie-form">
			<div className="input-group">
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Food title" className="input-field" />
                <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" className="input-field" />
			</div>
			<div className="input-group">
                <input type="text" value={cost} onChange={(e) => setCost(e.target.value)} placeholder="Production Cost" className="input-field" />
            </div>
				<button type="submit" className="submit-button">Add Food</button>
            </form>
        </div>
    );
};

export default AddMovie;
