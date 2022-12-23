import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from '../../Healpers/apiService.js';
import { SectionDetails, DetailsText, Genr } from './MovieDetails.styled.js';

export const MovieDetails = () => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getInfo() {
      try {
        setLoader(true);
        const res = await getMovie.details(moviesId);
        if (!res.data) {
          setError(true);
        }
        setMovie(res.data);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getInfo();
  }, [moviesId]);

  if (!movie) {
    return null;
  }
  const {
    title,
    release_date: date,
    overview,
    genres,
    poster_path: poster,
  } = movie;
  console.log(movie);
  return (
    <>
      <SectionDetails>
        <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title} />

        <DetailsText>
          <h2>
            {title} --- {date}
          </h2>
          <p>{overview}</p>
          {genres.map(el => (
            <Genr key={el.id}>{el.name}</Genr>
          ))}
        </DetailsText>
      </SectionDetails>
    </>
  );
};
