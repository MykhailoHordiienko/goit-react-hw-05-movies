import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  padding: 20px;
  color: white;
  :not(:last-child) {
    margin-right: 20px;
  }
  &.active {
    color: orange;
    border: 1px dashed orange;
  }

  :hover:not(.active),
  :focus:not(.active) {
    color: orange;
  }
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 300ms cubic-bezier(0.4, 0, 0.2, 1);
`;
