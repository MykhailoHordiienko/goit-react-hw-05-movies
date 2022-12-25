import axios from 'axios';

const API_KEY = '43f09186dbfac2b776be22c9b0a74823';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

export const getMovie = {
  trending: async () => {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response;
  },
  search: async query => {
    const response = await axios.get(
      `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    return response;
  },
  details: async movieId => {
    const response = await axios.get(
      `movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );

    return response;
  },
  actors: async movieId => {
    const response = await axios.get(
      `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response;
  },
  reviews: async movieId => {
    const response = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response;
  },
};
