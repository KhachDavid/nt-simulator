export const GET_NATIONS_REQUEST = "GET_NATIONS_REQUEST";
export const GET_NATIONS_FAILURE = "GET_NATIONS_FAILURE";
export const GET_NATIONS_SUCCESS = "GET_NATIONS_SUCCESS";
export const GET_PLAYERS_FROM_NATION_REQUEST =
  "GET_PLAYERS_FROM_NATION_REQUEST";
export const GET_PLAYERS_FROM_NATION_SUCCESS =
  "GET_PLAYERS_FROM_NATION_SUCCESS";
export const GET_PLAYERS_FROM_NATION_FAILURE =
  "GET_PLAYERS_FROM_NATION_FAILURE";
export const RESET_PLAYERS = "RESET_PLAYERS";
export const GET_CONTINENTS_REQUEST = "GET_CONTINENTS_REQUEST";
export const GET_CONTINENTS_SUCCESS = "GET_CONTINENTS_SUCCESS";
export const GET_CONTINENTS_FAILURE = "GET_CONTINENTS_FAILURE";

export const getNationsRequest = () => ({
  type: GET_NATIONS_REQUEST,
});

export const getNationsFailure = () => ({
  type: GET_NATIONS_FAILURE,
});

export const getNationsSuccess = () => ({
  type: GET_NATIONS_SUCCESS,
});

export const fetchPaginatedResultsRequest = (nation, page) => ({
  type: GET_PLAYERS_FROM_NATION_REQUEST,
  payload: {
    nation,
    page,
  },
});

export const fetchPaginatedResultsSuccess = (data) => ({
  type: GET_PLAYERS_FROM_NATION_SUCCESS,
  payload: data,
});

export const fetchPaginatedResultsError = (error) => ({
  type: GET_PLAYERS_FROM_NATION_FAILURE,
  payload: error,
});

export const getContinentsRequest = () => ({
  type: GET_CONTINENTS_REQUEST,
});

export const getContinentsSuccess = (continents) => ({
  type: GET_CONTINENTS_SUCCESS,
  payload: continents,
});

export const getContinentsFailure = () => ({
  type: GET_CONTINENTS_FAILURE,
});

export const resetPlayers = () => ({
  type: RESET_PLAYERS,
});
