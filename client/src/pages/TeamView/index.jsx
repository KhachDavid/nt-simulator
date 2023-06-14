import { Breadcrumbs, Select, MenuItem } from "@mui/material";
import React, { useEffect, useState, useRef, useMemo } from "react";
import { connect } from "react-redux";
import Navbar from "../../components/NavBar";
import Page from "../../components/Page";
import { Link } from "react-router-dom";
import { getPlayersFromNation } from "../../store/sagas/selectors";
import { useLocation } from "react-router-dom";
import {
  getPlayersIsLoading,
  getHasNext,
  getNumPages,
  getCurrentPage,
  getNations,
} from "../../store/sagas/selectors";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchPaginatedResultsRequest,
  resetPlayers,
} from "../../store/actions/nation.action";
import EnhancedTable from "../../components/EnhancedTable";
import Pagination from "../../components/Pagination";
import { getCountryFlag, getCharactersFromString } from "../Teams/util";
import "./TeamView.scss";

const COLUMN_TO_EXCLUDE = ["uid", "page"];

export const TeamView = (props) => {
  // get team name from url
  const dispatch = useDispatch();

  const { teamId } = useParams();
  const [page, setPage] = useState(1);
  const [selectedTeam, setSelectedTeam] = useState(teamId);

  // on unmount, reset the current page to 1
  useEffect(() => {
    dispatch(fetchPaginatedResultsRequest(teamId, page));

    return () => {
      dispatch(resetPlayers());
    };
  }, [dispatch, teamId, page]);

  // get players from team
  // run dispatch(fetchPaginatedResultsRequest(team.name)); in the background
  // when the user clicks on the pagination buttons
  const handlePageClick = (page) => {
    setPage(page);
  };

  const handleTeamChange = (event) => {
    let name = getCharactersFromString(event.target.value);
    setSelectedTeam(name);
    dispatch(resetPlayers());
    dispatch(fetchPaginatedResultsRequest(name, page));
  };

  // GET COLUMNS FROM PLAYERS
  const columns =
    props.players.length > 0
      ? Object.keys(props.players[0]).map((key) => {
          return {
            id: key,
            label: key,
            minWidth: 170,
            align: "left",
            format: (value) => value.toLocaleString("en-US"),
          };
        })
      : [];

  // remove columns that we don't want to show
  columns.forEach((column, index) => {
    if (COLUMN_TO_EXCLUDE.includes(column.id)) {
      columns.splice(index, 1);
    }
  });

  // show all the players that have the page equaling the current page
  const players = props.players.filter((player) => {
    // convert player.page to a number
    // because it is a string when it is fetched from the api
    let player_page = Number(player.page);
    return player_page === props.currentPage;
  });

  return (
    <Page>
      <Navbar />
      {/* Add bread crumb */}
      <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
        <Link to="/">Home</Link>
        <Link to="/teams">Teams</Link>
      </Breadcrumbs>

      {/* Dropdown for selecting teams */}
      <Select value={selectedTeam} onChange={handleTeamChange} className="select-input">
        {props.nations.map((nation) => {
          return (
            <MenuItem
              key={nation.Country}
              value={getCharactersFromString(nation.Country)}
              selected={nation.Country === selectedTeam}
            >
              {nation.Country}
            </MenuItem>
          );
        })}
      </Select>

      {/* Show players */}
      <EnhancedTable rows={players} columns={columns} preSort={true} />

      <div
        style={{
          position: "sticky",
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          py: "16px",
          backgroundColor: "#FFF",
        }}
      >
        <Pagination
          page={props.currentPage}
          totalPages={props.numPages}
          onChangePage={handlePageClick}
          rowsPerPage={10}
        />
      </div>
    </Page>
  );
};

const mapStateToProps = (state) => ({
  players: getPlayersFromNation(state),
  isLoading: getPlayersIsLoading(state),
  hasNext: getHasNext(state),
  numPages: getNumPages(state),
  currentPage: getCurrentPage(state),
  nations: getNations(state),
  getNations: getNations(state),
});

export default connect(mapStateToProps)(TeamView);
