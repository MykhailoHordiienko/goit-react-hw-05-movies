import React from 'react';
import { ListItem, LinkItem } from './TrendingList.styled';

export const TrendingList = ({ movies }) => {
  return (
    <>
      {movies.map(film => (
        <ListItem key={film.id}>
          <LinkItem to={`/movies/${film.id}`}>{film.title}</LinkItem>
        </ListItem>
      ))}
    </>
  );
};
