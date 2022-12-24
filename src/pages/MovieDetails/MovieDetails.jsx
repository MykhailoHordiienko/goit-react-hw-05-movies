import { AditionalInfo } from 'components/AditionalInfo/AditionalInfo.jsx';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovie } from '../../Healpers/apiService.js';
import DefaultImg from '../../DefaultImg/defaultImg.jpeg';
import {
  SectionDetails,
  DetailsText,
  Genr,
  BackLink,
} from './MovieDetails.styled.js';

export const MovieDetails = () => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();

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

  return (
    <>
      <SectionDetails>
        <img
          src={
            poster === null
              ? DefaultImg
              : `https://image.tmdb.org/t/p/w500/${poster}`
          }
          alt={title}
        />

        <DetailsText>
          <h2>
            {title} --- {date}
          </h2>
          <p>{overview}</p>
          {genres.map(el => (
            <Genr key={el.id}>{el.name}</Genr>
          ))}

          <BackLink to={location.state?.from ?? '/'}>Back</BackLink>
        </DetailsText>
      </SectionDetails>
      <AditionalInfo />
      <Outlet />
    </>
  );
};
