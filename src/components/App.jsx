import { Home } from 'pages/Home/Home';

import { Route, Routes } from 'react-router-dom';
import { Cast } from './Cast/Cast';
import { Layaout } from './Layaout/Layaout';

import { Reviews } from './Reviews/Reviews';
import { lazy } from 'react';

const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layaout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="/movies/:moviesId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
