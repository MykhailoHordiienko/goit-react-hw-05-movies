import { MoviesList } from 'components/MoviesList/MoviesList';
import { getMovie } from 'Healpers/apiService';
import { Loader } from 'Healpers/Loader';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Form, Input, Button, SearchList } from './FilmSearch.styled';
import { DefaultImg } from 'DefaultImg/DefaultImg';

export const FilmSearch = () => {
  const [searchRes, setSearchRes] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const HandleSubmit = e => {
    e.preventDefault();
    const query = e.currentTarget.query.value;
    setSearchParams(query !== '' ? { query } : {});
    e.currentTarget.reset();
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    async function getRes() {
      try {
        setLoader(true);
        const res = await getMovie.search(query);

        if (res.data.results <= 0) {
          setError(true);
        }
        setSearchRes(res.data.results);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getRes();
    return () => {
      setError(false);
    };
  }, [query]);

  return (
    <>
      <Form className="form" onSubmit={HandleSubmit}>
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
      {loader && <Loader />}
      {error ? (
        <DefaultImg />
      ) : (
        <SearchList>
          {searchRes && <MoviesList movies={searchRes} />}
        </SearchList>
      )}
    </>
  );
};
