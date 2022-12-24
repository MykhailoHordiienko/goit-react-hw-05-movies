import { FilmSearch } from 'components/FilmSearch/FilmSearch';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MoviesSection } from './Movies.styled';

const Movies = () => {
  return (
    <MoviesSection>
      <FilmSearch />
      <Suspense>
        <Outlet />
      </Suspense>
    </MoviesSection>
  );
};

export default Movies;
