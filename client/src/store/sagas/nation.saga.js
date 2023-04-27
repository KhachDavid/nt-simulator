import { call, put, takeLatest, all } from "redux-saga/effects";
import { getNations, getPlayersFromNation } from "../../api/nation.api";
import {
  GET_NATIONS_REQUEST,
  GET_NATIONS_SUCCESS,
  GET_NATIONS_FAILURE,
  GET_PLAYERS_FROM_NATION_REQUEST,
  GET_PLAYERS_FROM_NATION_SUCCESS,
  GET_PLAYERS_FROM_NATION_FAILURE,
} from "../actions/nation.action.js";

function* getNationsRequestWorker() {
  try {
    const response = yield call(getNations);
    const nations = response.data;
    yield put({ type: GET_NATIONS_SUCCESS, payload: nations });
  } catch (error) {
    yield put({ type: GET_NATIONS_FAILURE, payload: error });
  }
}

function* fetchPaginatedResults(action) {
  const { nation, page } = action.payload;

  try {
    const response = yield call(getPlayersFromNation, nation, page);

    // add the current page to the response
    response.data.curr_page = page;

    yield put({ type: GET_PLAYERS_FROM_NATION_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: GET_PLAYERS_FROM_NATION_FAILURE, payload: error });
  }
}

function* watchFetchPaginatedResults() {
  yield takeLatest(GET_PLAYERS_FROM_NATION_REQUEST, fetchPaginatedResults);
}

export default function* () {
  yield takeLatest(GET_NATIONS_REQUEST, getNationsRequestWorker);
  yield all([watchFetchPaginatedResults()]);
}
