import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { ModalContext } from "../../components/ModalProvider";
import NavBar from "../../components/NavBar";
import Page from "../../components/Page";

export const Home = (props) => {
  return (
    <Page>
      <div>
        <NavBar/>
        <h1>Home</h1>
      </div>
    </Page>
  );
};

Home.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
