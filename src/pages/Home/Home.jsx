import { MoviesList } from 'components/MoviesList/MoviesList';
import { DefaultImg } from 'DefaultImg/DefaultImg';
import { getMovie } from 'Healpers/apiService';
import { Loader } from 'Healpers/Loader';
import { useState, useEffect } from 'react';
import { HomeSection, HomeList } from './Home.styled';

export const Home = () => {
  const [trendsMovies, setTrendsMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoader(true);
        const res = await getMovie.trending();
        if (res.data.results <= 0) {
          setError(true);
        }
        setTrendsMovies(res.data.results);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getData();
  }, []);

  return (
    <HomeSection>
      <h1>Trending Today</h1>
      {loader && <Loader />}
      <HomeList>
        {error ? <DefaultImg /> : <MoviesList movies={trendsMovies} />}
      </HomeList>
    </HomeSection>
  );
};
