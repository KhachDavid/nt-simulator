export const GET_NATIONS_REQUEST = "GET_NATIONS_REQUEST";
export const GET_NATIONS_FAILURE = "GET_NATIONS_FAILURE";
export const GET_NATIONS_SUCCESS = "GET_NATIONS_SUCCESS";
export const GET_PLAYERS_FROM_NATION_REQUEST =
  "GET_PLAYERS_FROM_NATION_REQUEST";
export const GET_PLAYERS_FROM_NATION_SUCCESS =
  "GET_PLAYERS_FROM_NATION_SUCCESS";
export const GET_PLAYERS_FROM_NATION_FAILURE =
  "GET_PLAYERS_FROM_NATION_FAILURE";
export const RESET_PLAYERS_SUCCESS = "RESET_PLAYERS_SUCCESS";

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

export const resetPlayersSuccess = () => ({
  type: RESET_PLAYERS_SUCCESS,
});
