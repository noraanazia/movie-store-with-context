import './App.css';
import React from 'react';
import { MovieProvider } from './context/MovieContext';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <div style={{border: "2px solid #0077CC", margin: '0 auto', width: '80%', backgroundColor: '#f5f5f5', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}>
        <AddMovie />
        <MovieList />
      </div>
      </div>
    </MovieProvider>
  );
}

export default App;