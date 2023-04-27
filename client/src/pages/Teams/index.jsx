/*
This is a React component named Teams that displays a list of countries and allows the user to search for a country by name. The list of countries can be navigated using pagination or by selecting the first letter of the country's name.

The component receives the list of countries from the Redux store and dispatches a Redux action to get the players from a selected country.

The component renders a NavBar component and a Paper component that contains the list of countries. The list is displayed as a Material-UI Table component with each row representing a country. The component also displays a search box that allows the user to filter the countries by name. The search box is implemented as a Material-UI TextField component that fires a handleSearchChange function when the user types in a search term.

The component uses the React.useState hook to manage the searchTerm state and the currentPage state, which is used to navigate the list of countries. The component also uses the React.useStyles hook to style the Material-UI Table component.

The component implements the Levenshtein distance algorithm to find the closest match to the user's search term if no country matches the search term. The algorithm is implemented as a levensteinDistance function that receives two strings as parameters and returns the minimum number of single-character edits (insertions, deletions or substitutions) required to change one string into the other.

The component also defines a constant named PAGINATION_SIZE, which is used to define the number of countries displayed per page. The component uses the alphabet array to split the list of countries by the first letter of their name. The filteredCountries variable holds the list of countries that match the search term or that belong to the selected page. The closestMatch variable holds the closest match to the user's search term.
*/

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { connect } from "react-redux";
import { ModalContext } from "../../components/ModalProvider";
import NavBar from "../../components/NavBar";
import Page from "../../components/Page";
import { getNations } from "../../store/sagas/selectors";
import { useDispatch } from "react-redux";
import { fetchPaginatedResultsRequest } from "../../store/actions/nation.action";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import EnhancedTable from "../../components/EnhancedTable";

const PAGINATION_SIZE = 5;
const COLUMN_TO_EXCLUDE = ["uid"];

export const Teams = (props) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const nations = props.nations;
  const [searchTerm, setSearchTerm] = useState("");

  const onRowClick = (nation) => {
    dispatch(fetchPaginatedResultsRequest(nation.Country, 1));
    navigate("/teams/" + nation.Country, {
      state: { team: nation },
    });
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

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

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [currentPage, setCurrentPage] = useState(0);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const levensteinDistance = (s1, s2) => {
    if (s1.length === 0) return s2.length;
    if (s2.length === 0) return s1.length;

    let v0 = new Array(s2.length + 1);
    let v1 = new Array(s2.length + 1);

    for (let i = 0; i < v0.length; i++) {
      v0[i] = i;
    }

    for (let i = 0; i < s1.length; i++) {
      v1[0] = i + 1;

      for (let j = 0; j < s2.length; j++) {
        let cost = s1[i] === s2[j] ? 0 : 1;
        v1[j + 1] = Math.min(v1[j] + 1, v0[j + 1] + 1, v0[j] + cost);
      }

      for (let j = 0; j < v0.length; j++) {
        v0[j] = v1[j];
      }
    }
    return v1[s2.length];
  };

  let filteredCountries;

  // don't paginate if we're searching
  if (searchTerm) {
    filteredCountries = nations.filter((country) => {
      return country.Country.toLowerCase().includes(searchTerm.toLowerCase());
    });
  } else {
    filteredCountries = nations.filter((country) => {
      const start = alphabet[Math.floor((currentPage * 26) / PAGINATION_SIZE)];
      const end =
        alphabet[Math.floor(((currentPage + 1) * 26) / PAGINATION_SIZE) - 1];
      return (
        country.Country.charAt(0) >= start && country.Country.charAt(0) <= end
      );
    });
  }
  let closestMatch = nations[0];

  if (searchTerm && filteredCountries.length === 0) {
    // find the closest match
    let closestDistance = levensteinDistance(
      searchTerm.toLowerCase(),

      closestMatch.Country.toLowerCase()
    );
    for (let i = 1; i < nations.length; i++) {
      const distance = levensteinDistance(
        searchTerm.toLowerCase(),
        nations[i].Country.toLowerCase()
      );
      if (distance < closestDistance) {
        closestDistance = distance;
        closestMatch = nations[i];
      }
    }
  }

  return (
    <Page>
      <div>
        <NavBar />
        {/* Show nations */}
        <Paper>
          <div
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <div style={{ flex: "1 1 auto", overflowY: "auto" }}>
              <div
                style={{
                  display: "flex",
                  // place it at the right side
                  justifyContent: "flex-start",
                  alignItems: "center",
                  mb: "16px",
                  px: "16px",
                  backgroundColor: "#FFF",
                  paddingTop: "16px",
                  paddingBottom: "16px",
                  paddingLeft: "16px",
                }}
              >
                <TextField
                  label="Search Teams"
                  variant="outlined"
                  size="small"
                  value={searchTerm}
                  sx={{
                    width: "100%",
                    maxWidth: "300px",
                    mr: "16px",
                    mb: "16px",
                    /* add margin and padding between component */
                  }}
                  onChange={handleSearchChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <div
                          onClick={() => setSearchTerm("")}
                          style={{
                            cursor: "pointer",
                            // center
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            // make it a circle
                            borderRadius: "50%",

                            // add hover effect
                            "&:hover": {
                              backgroundColor: "#E0E0E0",
                            },

                            // add active effect
                            "&:active": {
                              backgroundColor: "#BDBDBD",
                            },
                          }}
                        >
                          <CloseIcon />
                        </div>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

              <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    {filteredCountries.length === 0 ? (
                      <TableRow>
                        <TableCell>
                          {searchTerm && (
                            <div>
                              <Typography
                                color="primary"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                  setSearchTerm(closestMatch.Country)
                                }
                              >
                                Did you mean <i>{closestMatch.Country}?</i>
                              </Typography>
                            </div>
                          )}
                        </TableCell>
                      </TableRow>
                    ) : (
                      <EnhancedTable
                        rows={filteredCountries}
                        columns={columns}
                        onRowClick={onRowClick}
                      />
                    )}
                  </TableHead>
                </Table>
              </TableContainer>
            </div>
          </div>
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
            {searchTerm === "" &&
              Array.from({ length: PAGINATION_SIZE }, (_, i) => {
                const start = alphabet[Math.floor((i * 26) / PAGINATION_SIZE)];
                const end =
                  alphabet[Math.floor(((i + 1) * 26) / PAGINATION_SIZE) - 1];
                const isActive = currentPage === i;

                return (
                  <Button
                    key={i}
                    variant={isActive ? "contained" : "outlined"}
                    onClick={() => onPageChange(i)}
                    sx={{
                      py: "12px",
                      px: "24px",
                      m: "8px",
                      borderRadius: "8px",
                      backgroundColor: isActive ? "#3f51b5" : "#fff",
                    }}
                  >
                    {`${start}-${end}`}
                  </Button>
                );
              })}
          </div>
        </Paper>
      </div>
    </Page>
  );
};

Teams.propTypes = {};

const mapStateToProps = (state) => ({
  nations: getNations(state),
});

const mapDispatchToProps = {
  // getNationsRequest,
  getNations,
};

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
