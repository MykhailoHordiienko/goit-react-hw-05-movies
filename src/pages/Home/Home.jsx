import { TrendingList } from 'components/TrendigList/TrendingList';
import { getMovie } from 'Healpers/apiService';
import { useState, useEffect } from 'react';

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
    <section>
      <h1>Trending Today</h1>
      <TrendingList movies={trendsMovies} />
    </section>
  );
};
