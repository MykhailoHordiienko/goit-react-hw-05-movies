import React from 'react';
import { useLocation } from 'react-router-dom';
import { ListItem, LinkItem } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      {movies.map(film => (
        <ListItem key={film.id}>
          <LinkItem to={`/movies/${film.id}`} state={{ from: location }}>
            {film.title}
          </LinkItem>
        </ListItem>
      ))}
    </>
  );
};
