import { FilmSearch } from 'components/FilmSearch/FilmSearch';
import React from 'react';
import { Outlet } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';

export const Movies = () => {
  return (
    <section>
      <FilmSearch />
      <Outlet />
    </section>
  );
};
