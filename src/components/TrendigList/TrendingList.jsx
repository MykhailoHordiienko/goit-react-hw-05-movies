import React from 'react';
import { Link } from 'react-router-dom';

export const TrendingList = ({ movies }) => {
  return (
    <>
      {movies.map(film => (
        <li key={film.id}>
          <Link to={`/movies/${film.id}`}>{film.title}</Link>
        </li>
      ))}
    </>
  );
};
