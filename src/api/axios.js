import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    part: 'snippet,id',
    regionCode: 'US',
    maxResults: '50',
    order: 'date',
  },
  headers: {
    'X-RapidAPI-Key': 'c44d3cc5cdmsh2ab593199fd431cp1fb805jsnf0678877e4f0',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const getYoutubeAPIData = (searchQuery = 'javascript') => {
  const apiOptions = {
    ...options,
    params: {
      ...options.params,
      q: searchQuery,
    },
  };

  return axios.request(apiOptions);
};