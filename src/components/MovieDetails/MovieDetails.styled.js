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
