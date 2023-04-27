import {
  GET_NATIONS_REQUEST,
  GET_NATIONS_SUCCESS,
  GET_NATIONS_FAILURE,
  GET_PLAYERS_FROM_NATION_REQUEST,
  GET_PLAYERS_FROM_NATION_SUCCESS,
  GET_PLAYERS_FROM_NATION_FAILURE,
  RESET_PLAYERS_SUCCESS,
} from "../actions/nation.action";

const initialState = {
  nations: [],
  players: [],
  loading: false,
  error: null,
  num_pages: 0,
  has_next: false,
  has_prev: false,
  curr_page: 1,
  // boolean to check if getPlayersFromNation was successful
  getPlayersSuccess: false,
};

export default function nationReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NATIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_NATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        nations: action.payload,
        players: state.players,
      };
    case GET_NATIONS_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case GET_PLAYERS_FROM_NATION_REQUEST:
      return { ...state, loading: true };

    case GET_PLAYERS_FROM_NATION_SUCCESS:
      // if the current page is 1, then we are fetching the first page
      // so we need to reset the players array
      if (action.payload.curr_page === 1) {
        return {
          ...state,
          loading: false,
          players: action.payload.results,
          num_pages: action.payload.num_pages,
          has_next: action.payload.has_next,

          has_prev: action.payload.has_prev,
          curr_page: action.payload.curr_page,
          getPlayersSuccess: true,
        };
      }

      return {
        ...state,
        loading: false,
        players: state.players.concat(action.payload.results),
        num_pages: action.payload.num_pages,
        has_next: action.payload.has_next,
        has_prev: action.payload.has_prev,
        curr_page: action.payload.curr_page,
        getPlayersSuccess: true,
      };

    case GET_PLAYERS_FROM_NATION_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
