import React from 'react';

export const CastItem = ({ profile, name, character }) => {
  return (
    <li>
      <h4>{character}</h4>
      <img src={`https://image.tmdb.org/t/p/w500/${profile}`} alt={name} />
      <p>{profile}</p>
      <h4>{name}</h4>
    </li>
  );
};
