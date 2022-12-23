import styled from 'styled-components';

export const SectionDetails = styled.section`
  display: flex;
`;

export const DetailsText = styled.div`
  padding: 50px;
  text-align: center;
`;

export const Genr = styled.span`
  display: inline-block;
  :not(:last-child) {
    margin-right: 20px;
  }
  margin-top: 40px;
  font-weight: bold;
`;
