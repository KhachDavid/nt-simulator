import {
  GET_NATIONS_REQUEST,
  GET_NATIONS_SUCCESS,
  GET_NATIONS_FAILURE,
  GET_PLAYERS_FROM_NATION_REQUEST,
  GET_PLAYERS_FROM_NATION_SUCCESS,
  GET_PLAYERS_FROM_NATION_FAILURE,
  GET_CONTINENTS_REQUEST,
  GET_CONTINENTS_SUCCESS,
  GET_CONTINENTS_FAILURE,
  RESET_PLAYERS,
  SEND_REPORT_REQUEST,
  SEND_REPORT_SUCCESS,
  SEND_REPORT_FAILURE,
} from "../actions/nation.action";

const initialState = {
  nations: [],
  continents: [],
  players: [],
  loading: false,
  error: null,
  num_pages: 0,
  has_next: false,
  has_prev: false,
  curr_page: 1,
  // boolean to check if getPlayersFromNation was successful
  getPlayersSuccess: false,
  reportResult: null,
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

    case GET_PLAYERS_FROM_NATION_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case RESET_PLAYERS:
      return {
        ...state,
        players: [],
        num_pages: 0,
        has_next: false,
        has_prev: false,
        curr_page: 1,
        getPlayersSuccess: false,
      };

    case GET_CONTINENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CONTINENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        continents: action.payload,
      };
    case GET_CONTINENTS_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case SEND_REPORT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SEND_REPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        reportResult: action.payload,
      };

    case SEND_REPORT_FAILURE:
      return {
        ...state,
        loading: false,
        reportResult: action.payload,
      };

    default:
      return state;
  }
}
