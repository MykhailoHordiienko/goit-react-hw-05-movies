import { CastItem } from 'components/CastItem/CastItem';
import { getMovie } from 'Healpers/apiService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, CastSection } from './Cast.styled';

export const Cast = () => {
  const params = useParams();
  const { moviesId } = params;

  const [filmCast, setFilmCast] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getCast() {
      try {
        setLoader(true);
        const res = await getMovie.actors(moviesId);

        if (!res.data) {
          setError(true);
        }
        setFilmCast(res.data.cast);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getCast();
  }, [moviesId]);
  if (!filmCast) {
    return null;
  }

  return (
    <CastSection>
      <CastList>
        {filmCast.map(({ id, profile_path, name, character }) => {
          return (
            <CastItem
              key={id}
              profile={profile_path}
              name={name}
              character={character}
            />
          );
        })}
      </CastList>
    </CastSection>
  );
};
