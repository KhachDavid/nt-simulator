import axios from "axios";
import { endpoints } from "./endpoints";

/**
 * This function is used to get the account creation form data.
 * It includes the list of states and occupations, which are
 * needed to populate the form.
 * @returns {Promise}
 * When resolved, if successful returns an array of objects with the following structure:
 * response = {
 *   data: {
 *     states: {
 *       name: string,
 *       abbreviation: string,
 *     },
 *     occupations: []
 *   },
 *   status: number,
 * }
 */
export const getNations = () => {
  return axios.get(endpoints.main + endpoints.nations);
};

export const getContinents = () => {
  return axios.get(endpoints.main + endpoints.continents);
};

export const getPlayersFromNation = (nation, page) => {
  return axios.get(endpoints.main + endpoints.nations + "/" + nation, {
    params: {
      page: page,
    },
  });
};

export const sendReport = (data) => {
  console.log(data);
  return axios.post(endpoints.main + endpoints.report, data);
};
