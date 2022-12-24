import PropTypes from 'prop-types';

export const ReviewsItem = ({ author, date, content }) => {
  const localDate = new Date(date);
  const murcUpDate = localDate.toLocaleDateString();

  return (
    <li>
      <h3>
        Written by {author} on {murcUpDate}
      </h3>
      <p>{content}</p>
    </li>
  );
};

ReviewsItem.propTypes = {
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
