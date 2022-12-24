import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from 'Healpers/apiService';
import { ReviewsItem } from 'components/ReviewsItem/ReviewsItem';
import { ReviewsSection, ReviwesTitle } from './Reviews.styled';

export const Reviews = () => {
  const params = useParams();
  const { moviesId } = params;

  const [review, setReview] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getReview() {
      try {
        setLoader(true);
        const res = await getMovie.reviews(moviesId);
        if (!res.data.results) {
          setError(true);
        }
        setReview(res.data.results);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getReview();
  }, [moviesId]);

  if (!review) {
    return null;
  }

  return (
    <ReviewsSection>
      <ReviwesTitle>Reviews</ReviwesTitle>
      <ul>
        {review.map(({ author, id, updated_at, content }) => {
          return (
            <ReviewsItem
              key={id}
              author={author}
              date={updated_at}
              content={content}
            />
          );
        })}
      </ul>
    </ReviewsSection>
  );
};
