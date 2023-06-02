/*
This is a React component named Teams that displays a list of countries and allows the user to search for a country by name. The list of countries can be navigated using pagination or by selecting the first letter of the country's name.

The component receives the list of countries from the Redux store and dispatches a Redux action to get the players from a selected country.

The component renders a NavBar component and a Paper component that contains the list of countries. The list is displayed as a Material-UI Table component with each row representing a country. The component also displays a search box that allows the user to filter the countries by name. The search box is implemented as a Material-UI TextField component that fires a handleSearchChange function when the user types in a search term.

The component uses the React.useState hook to manage the searchTerm state and the currentPage state, which is used to navigate the list of countries. The component also uses the React.useStyles hook to style the Material-UI Table component.

The component implements the Levenshtein distance algorithm to find the closest match to the user's search term if no country matches the search term. The algorithm is implemented as a levensteinDistance function that receives two strings as parameters and returns the minimum number of single-character edits (insertions, deletions or substitutions) required to change one string into the other.

The component also defines a constant named PAGINATION_SIZE, which is used to define the number of countries displayed per page. The component uses the alphabet array to split the list of countries by the first letter of their name. The filteredCountries variable holds the list of countries that match the search term or that belong to the selected page. The closestMatch variable holds the closest match to the user's search term.
*/

import Navbar from "../../components/NavBar";
import React, { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import NavBar from "../../components/NavBar";
import Page from "../../components/Page";
import { getNations, getContinents } from "../../store/sagas/selectors";
import { useDispatch } from "react-redux";
import {
  fetchPaginatedResultsRequest,
  getNationsRequest,
  getContinentsRequest,
} from "../../store/actions/nation.action";
import Pagination from "../../components/Pagination";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EnhancedTable from "../../components/EnhancedTable";
import { getCharactersFromString } from "./util";

const MAX_ROWS_PER_PAGE = 50;
const COLUMN_TO_EXCLUDE = ["uid"];

export const Teams = (props) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const nations = props.nations;
  const [currentPage, setCurrentPage] = useState(1);
  const [continentFilter, setContinentFilter] = useState("All");

  useEffect(() => {
    // dispatch both actions at the same time to get the data faster
    dispatch(getNationsRequest());
    dispatch(getContinentsRequest());

    return () => {
      // cleanup
      window.filteredNationsLength = 0;
    };
  }, [dispatch]);

  const onRowClick = (nation) => {
    let actualNation = getCharactersFromString(nation.Country);

    // make nation country be actualNation
    nation.Country = actualNation;

    dispatch(fetchPaginatedResultsRequest(actualNation, 1));
    navigate("/teams/" + actualNation, {
      state: { team: nation },
    });
  };

  const handlePageClick = (event, page) => {
    setCurrentPage(event);
  };

  // use memo run first time and then only when the dependencies change
  const filteredNations = useMemo(() => {
    // filter by continent
    let filteredNations = nations.filter((nation) => {
      if (continentFilter === "All") {
        return true;
      }

      return nation.Continent === continentFilter;
    });

    // keep a reference of the filtered nations length before we slice it for pagination
    const filteredNationsLength = filteredNations.length;
    window.filteredNationsLength = filteredNationsLength;

    // filter by page
    filteredNations = filteredNations.slice(
      (currentPage - 1) * MAX_ROWS_PER_PAGE,
      (currentPage - 1) * MAX_ROWS_PER_PAGE + MAX_ROWS_PER_PAGE
    );

    return filteredNations;
  }, [nations, currentPage, continentFilter]);

  // if nations is empty, return null
  if (nations.length === 0) {
    return (
      <Page title="Teams">
        <NavBar />
        <Typography variant="h1">Teams</Typography>
        <Typography variant="h2">Loading...</Typography>
      </Page>
    );
  }

  /* get properties of the first nation */
  let columns = Object.keys(nations[0]).map((key) => ({
    id: key,
    label: key,
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  }));

  /* remove uid from columns */
  columns = columns.filter((column) => !COLUMN_TO_EXCLUDE.includes(column.id));

  return (
    <Page>
      <Navbar />

      {/* Render continents as filter buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          gap: "16px",
          padding: "16px 0",
        }}
      >
        {props.continents.map((continent) => (
          <button
            key={continent}
            onClick={() => {
              if (continentFilter === continent) {
                setContinentFilter("All");
                setCurrentPage(1);
                return;
              }
              // set the filter
              setCurrentPage(1);
              setContinentFilter(continent);
            }}
            style={{
              backgroundColor:
                continentFilter === continent ? "#3f51b5" : "#FFF",
              color: continentFilter === continent ? "#FFF" : "#3f51b5",
              border: "1px solid #3f51b5",
              borderRadius: "5px",
              // make them bigger
              padding: "8px 16px",
              // make them bold
              fontWeight: "bold",

              "&:hover": {
                backgroundColor: "#3f51b5",
                color: "#FFF",
                
                // change the mouse to pointer
                cursor: "pointer",
                position: "relative",
              },

              "&:focus": {
                outline: "none",
              },
            }}
          >
            {continent}
          </button>
        ))}
      </div>

      <EnhancedTable
        rows={filteredNations}
        columns={columns}
        onRowClick={onRowClick}
        preSort={false}
      />

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
          page={currentPage}
          totalPages={
            // based on continent filter
            continentFilter === "All"
              ? Math.ceil(nations.length / MAX_ROWS_PER_PAGE)
              : Math.ceil(window.filteredNationsLength / MAX_ROWS_PER_PAGE)
          }
          onChangePage={handlePageClick}
          rowsPerPage={10}
        />
      </div>
    </Page>
  );
};

Teams.propTypes = {};

const mapStateToProps = (state) => ({
  nations: getNations(state),
  continents: getContinents(state),
});

const mapDispatchToProps = {
  // getNationsRequest,
  getNations,
};

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
