import { call, put, takeLatest, all, delay } from "redux-saga/effects";
import {
  getNations,
  getPlayersFromNation,
  getContinents,
  sendReport,
} from "../../api/nation.api";
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
  SEND_REPORT_REQUEST,
  SEND_REPORT_SUCCESS,
  SEND_REPORT_FAILURE,
} from "../actions/nation.action.js";
import { getCountryFlag } from "../../pages/Teams/util";

function* getNationsRequestWorker() {
  try {
    const response = yield call(getNations);
    const nations = response.data;

    // get the flag of each nation
    nations.forEach((nation, index) => {
      if (nation && nation.Country) {
        nation.Country = getCountryFlag(nation.Country) + " " + nation.Country;
      }
    });

    yield put({ type: GET_NATIONS_SUCCESS, payload: nations });
  } catch (error) {
    yield put({ type: GET_NATIONS_FAILURE, payload: error });
  }
}

function* getContinentsRequestWorker() {
  try {
    const response = yield call(getContinents);
    const continents = response.data;
    yield put({ type: GET_CONTINENTS_SUCCESS, payload: continents });
  } catch (error) {
    yield put({ type: GET_CONTINENTS_FAILURE, payload: error });
  }
}

function* fetchPaginatedResults(action) {
  const { nation, page } = action.payload;

  try {
    const response = yield call(getPlayersFromNation, nation, page);

    // add the current page to the response
    response.data.curr_page = page;

    //

    yield put({
      type: GET_PLAYERS_FROM_NATION_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: GET_PLAYERS_FROM_NATION_FAILURE, payload: error });
  }
}

function* sendReportRequestWorker(action) {
  const data = action.payload;
  try {
    const response = yield call(sendReport, data);
    yield put({ type: SEND_REPORT_SUCCESS, payload: response.status === 201 ? "success" : "failure" });
    yield delay(5000);
    yield put({ type: SEND_REPORT_SUCCESS, payload: null });
  } catch (error) {
    yield put({ type: SEND_REPORT_FAILURE, payload: error });
    yield delay(5000);
    yield put({ type: SEND_REPORT_FAILURE, payload: null });
  }
}

function* watchFetchPaginatedResults() {
  yield takeLatest(GET_PLAYERS_FROM_NATION_REQUEST, fetchPaginatedResults);
}

export default function* () {
  yield takeLatest(GET_NATIONS_REQUEST, getNationsRequestWorker);
  yield takeLatest(GET_CONTINENTS_REQUEST, getContinentsRequestWorker);
  yield takeLatest(SEND_REPORT_REQUEST, sendReportRequestWorker);
  yield all([watchFetchPaginatedResults()]);
}
