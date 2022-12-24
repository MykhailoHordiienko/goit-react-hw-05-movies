import { FilmSearch } from 'components/FilmSearch/FilmSearch';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { MoviesSection } from './Movies.styled';
// import { Outlet } from 'react-router-dom';

export const Movies = () => {
  return (
    <MoviesSection>
      <FilmSearch />
      <Outlet />
    </MoviesSection>
  );
};
