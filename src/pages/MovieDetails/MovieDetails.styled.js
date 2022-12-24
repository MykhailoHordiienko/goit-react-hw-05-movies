import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SectionDetails = styled.section`
  display: flex;
`;

export const DetailsText = styled.div`
  padding: 50px;
  text-align: center;
  background: linear-gradient(
    90deg,
    rgba(181, 182, 196, 1) 1%,
    rgba(204, 208, 209, 1) 7%,
    rgba(237, 237, 241, 0.975249474789916) 98%
  );
`;

export const Genr = styled.span`
  display: inline-block;
  :not(:last-child) {
    margin-right: 20px;
  }
  margin-top: 40px;
  font-weight: bold;
`;

export const BackLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50%;
  background-color: lightblue;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  font-weight: 500;
  font-size: 16px;
  line-height: 1.6;
  border: none;
  border-radius: 4px;
  padding: 10px 32px;

  cursor: pointer;
  &:hover,
  &:focus {
    background-color: darkblue;
    color: white;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
