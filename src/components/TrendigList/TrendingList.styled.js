import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  padding: 10px;
  color: black;
  :hover,
  :focus {
    color: blue;
  }
`;
