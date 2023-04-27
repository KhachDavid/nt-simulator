import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { ModalContext } from "../../components/ModalProvider";
import NavBar from "../../components/NavBar";
import Page from "../../components/Page";

export const News = (props) => {
  return (
    <Page>
      <div>
        <NavBar/>
        <h1>News</h1>
      </div>
    </Page>
  );
};

News.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(News);
