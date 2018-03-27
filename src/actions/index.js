import axios from "axios";

import * as actionTypes from "./types";

const BASE_URL =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3d27521af72e4b01a81a1d68d66bd08a";

export const onFetchNews = () => {
  const response = axios.get(BASE_URL);

  return {
    type: actionTypes.FETCH_INITIAL_ARTICLES,
    payload: response
  };
};

export const onSearchByKeyword = url => {
  const response = axios.get(url);

  return {
    type: actionTypes.SEARCH_BY_KEYWORD,
    payload: response
  };
};

export const onSearchByCategory = url => {
  const response = axios.get(url);

  return {
    type: actionTypes.SEARCH_BY_CATEGORY,
    payload: response
  };
};
