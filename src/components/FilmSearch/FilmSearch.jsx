import React from 'react';
import { Form, Input, Button } from './FilmSearch.styled';

export const FilmSearch = () => {
  return (
    <Form className="form">
      <Button type="submit">
        <span>Search</span>
      </Button>

      <Input
        className="input"
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search Movies"
      />
    </Form>
  );
};
