export const getNations = (state) => state.nation.nations;
export const getPlayersFromNation = (state) => state.nation.players;
export const getPlayersIsLoading = (state) => state.nation.loading;
export const getNumPages = (state) => state.nation.num_pages;
export const getHasNext = (state) => state.nation.has_next;
export const getHasPrev = (state) => state.nation.has_prev;
export const getCurrentPage = (state) => state.nation.curr_page;
