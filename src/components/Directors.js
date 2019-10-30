import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let addDirector = directors.map(director => 
  <div>
    {director.name}
    {director.movies.map(movie => 
    <li>
      {movie}
    </li>)}
  </div>)
  return (
    <div>
      <h1>Directors Page</h1>
      {addDirector}
    </div>
  );
}

export default Directors
