import { AditionalInfo } from 'components/AditionalInfo/AditionalInfo.jsx';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovie } from '../../Healpers/apiService.js';
import defaultImg from '../../DefaultImg/defaultImg.jpeg';
import {
  SectionDetails,
  DetailsText,
  Genr,
  BackLink,
} from './MovieDetails.styled.js';
import { DefaultImg } from 'DefaultImg/DefaultImg.jsx';
import { Loader } from 'Healpers/Loader.jsx';

const MovieDetails = () => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();

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
        navigate('/', { replace: true });
      } finally {
        setLoader(false);
      }
    }
    getInfo();
  }, [moviesId, navigate]);

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
      {error ? (
        <DefaultImg />
      ) : (
        <>
          {loader && <Loader />}
          <SectionDetails>
            <img
              src={
                poster === null
                  ? defaultImg
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
      )}
    </>
  );
};

export default MovieDetails;
