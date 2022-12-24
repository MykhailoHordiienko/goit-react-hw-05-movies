import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  NavItem,
  AditionalList,
  AditionalSection,
  AditionalItem,
} from './AditionalInfo.styled';

export const AditionalInfo = () => {
  const location = useLocation();
  return (
    <AditionalSection>
      <AditionalList>
        <AditionalItem>
          <NavItem to="cast" state={{ from: location.state?.from } ?? '/'}>
            Cast
          </NavItem>
        </AditionalItem>
        <AditionalItem>
          <NavItem to="reviews" state={{ from: location.state?.from } ?? '/'}>
            Reviews
          </NavItem>
        </AditionalItem>
      </AditionalList>
    </AditionalSection>
  );
};
