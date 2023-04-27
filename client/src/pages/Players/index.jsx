import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { ModalContext } from "../../components/ModalProvider";
import NavBar from "../../components/NavBar";
import Page from "../../components/Page";
import { getPlayersFromNation } from "../../store/sagas/selectors";

export const Players = (props) => {
  const players = props.players;
  return (
    <Page>
      <div>
        <NavBar />
        <h1>Players</h1>
        {/* Show players */}
        <ul>
          {players.map((player) => (
            <li key={player.name}>{player.name}</li>
          ))}
        </ul>
      </div>
    </Page>
  );
};

Players.propTypes = {};

const mapStateToProps = (state) => ({
  players: getPlayersFromNation(state),
});

const mapDispatchToProps = {
  getPlayersFromNation,
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);
