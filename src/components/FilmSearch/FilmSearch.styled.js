import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Input = styled.input`
  width: 300px;
  height: 40px;
  padding-left: 10px;
`;

export const Button = styled.button`
  margin-right: 10px;
  background-color: lightblue;
  color: black;
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

export const SearchList = styled.ul`
  list-style: none;
  padding: 20px;
  text-align: center;
`;
