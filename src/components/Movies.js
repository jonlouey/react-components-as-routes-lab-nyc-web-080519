import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let addMovie = movies.map(movie => 
  <div>
    {movie.title}
    {movie.time}
    {movie.genres.map(genre => 
      <ul>
        <li>
          {genre}
        </li>
      </ul> )}
  </div>)
  return (
    <div>
      <h1>Movies Page</h1>
      {addMovie}
    </div>
  );
};

export default Movies;
