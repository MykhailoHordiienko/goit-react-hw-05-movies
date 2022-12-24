import React from 'react';
import DefaultImg from '../../DefaultImg/defaultImg.jpeg';
import { CastTitles, CastImg, CastListItem } from './CastItem.styled';

export const CastItem = ({ profile, name, character }) => {
  return (
    <CastListItem>
      <CastTitles>{character}</CastTitles>
      <CastImg
        src={
          profile === null
            ? DefaultImg
            : `https://image.tmdb.org/t/p/w500/${profile}`
        }
        alt={name}
      />
      <CastTitles>{name}</CastTitles>
    </CastListItem>
  );
};
