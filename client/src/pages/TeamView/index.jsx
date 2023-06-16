import { Breadcrumbs, Select, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Navbar from "../../components/NavBar";
import Page from "../../components/Page";
import { Link } from "react-router-dom";
import {
  getPlayersIsLoading,
  getPlayersFromNation,
  getHasNext,
  getNumPages,
  getCurrentPage,
  getNations,
  getReportResult,
} from "../../store/sagas/selectors";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchPaginatedResultsRequest,
  resetPlayers,
  sendReportRequest,
} from "../../store/actions/nation.action";
import EnhancedTable from "../../components/EnhancedTable";
import Pagination from "../../components/Pagination";
import { getCharactersFromString } from "../Teams/util";
import "./TeamView.scss";
import CloseIcon from "@mui/icons-material/Close";
import ReportIcon from "@mui/icons-material/Report";
import { Alert } from "@mui/material";

const COLUMN_TO_EXCLUDE = ["uid", "page"];

const TeamView = (props) => {
  const dispatch = useDispatch();
  const { teamId } = useParams();
  const [page, setPage] = useState(1);
  const [selectedTeam, setSelectedTeam] = useState(teamId);
  const [activePlayer, setActivePlayer] = useState(null);

  useEffect(() => {
    dispatch(fetchPaginatedResultsRequest(selectedTeam, page));

    return () => {
      dispatch(resetPlayers());
    };
  }, [dispatch, teamId, page]);

  const closeActivePlayer = () => {
    setActivePlayer(null);
  };

  const handlePageClick = (page) => {
    setPage(page);
  };

  const handleTeamChange = (event) => {
    let name = getCharactersFromString(event.target.value);
    setSelectedTeam(name);
    dispatch(resetPlayers());
    dispatch(fetchPaginatedResultsRequest(name, page));
  };

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

  columns.forEach((column, index) => {
    if (COLUMN_TO_EXCLUDE.includes(column.id)) {
      columns.splice(index, 1);
    }
  });

  const players = props.players.filter(
    (player) => Number(player.page) === props.currentPage
  );

  const onRowClick = (data) => {
    setActivePlayer(data);
  };

  const onReportClick = () => {
    dispatch(sendReportRequest(activePlayer));
  };

  return (
    <Page>
      <Navbar />
      <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
        <Link to="/">Home</Link>
        <Link to="/teams">Teams</Link>
      </Breadcrumbs>
      <div className="team-view-container">
        <div className="select-container">
          <Select
            value={selectedTeam}
            onChange={handleTeamChange}
            className="select-input"
          >
            {props.nations.map((nation) => (
              <MenuItem
                key={nation.Country}
                value={getCharactersFromString(nation.Country)}
                selected={nation.Country === selectedTeam}
              >
                {nation.Country}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div
          className={`content-container ${
            activePlayer ? "split-container" : "full-container"
          }`}
        >
          <div className="table-container">
            <EnhancedTable
              rows={players}
              columns={columns}
              preSort={true}
              onRowClick={onRowClick}
            />
          </div>

          {activePlayer && (
            <div className="active-player-container">
              <div className="player-header">
                <button className="close-button" onClick={closeActivePlayer}>
                  <CloseIcon />
                </button>
              </div>
              <div className="player-stats">
                <h2>Player Stats</h2>
                <p>Name: {activePlayer.Name}</p>
                <p>Age: {activePlayer.Age}</p>
                <p>Position: {activePlayer.Position}</p>
                {/* Add more player stats as needed */}
              </div>
              <button className="report-button" onClick={onReportClick}>
                <ReportIcon />
              </button>
            </div>
          )}
        </div>

        <div className="pagination-container">
          <Pagination
            page={props.currentPage}
            totalPages={props.numPages}
            onChangePage={handlePageClick}
            rowsPerPage={10}
          />
        </div>
      </div>
      {/* If reportResult is not empty show alert */}
      {props.reportResult && (
        <div className="alert">
          <Alert severity={props.reportResult} >
            {props.reportResult}
          </Alert>
        </div>
      )}
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
  reportResult: getReportResult(state),
});

export default connect(mapStateToProps)(TeamView);
