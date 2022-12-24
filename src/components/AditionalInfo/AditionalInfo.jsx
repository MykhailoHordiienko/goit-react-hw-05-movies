import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  NavItem,
  AditionalList,
  AditionalSection,
  AditionalItem,
} from './AditionalInfo.styled';

export const AditionalInfo = () => {
  return (
    <AditionalSection>
      <AditionalList>
        <AditionalItem>
          <NavItem to="cast">Cast</NavItem>
        </AditionalItem>
        <AditionalItem>
          <NavItem to="reviews">Reviews</NavItem>
        </AditionalItem>
      </AditionalList>
    </AditionalSection>
  );
};
