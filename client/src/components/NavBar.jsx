import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";
import { styled } from "@mui/system";
import Clock from "./Clock";

const ActiveButton = styled(Button)({
  backgroundColor: "#fff",
  color: "#000",

  "&:hover": {
    backgroundColor: "#fff",
    color: "#000",
  },

  "&:active": {
    backgroundColor: "#fff",
    color: "#000",
  },
});

function Navbar() {
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Button
          component={NavLink}
          to="/"
          color="inherit"
          sx={{ borderRadius: 2 }}
        >
          {location.pathname === "/" ? (
            <ActiveButton>Home</ActiveButton>
          ) : (
            "Home"
          )}
        </Button>
        <Button
          component={NavLink}
          to="/news"
          color="inherit"
          sx={{ borderRadius: 2 }}
        >
          {location.pathname === "/news" ? (
            <ActiveButton>News</ActiveButton>
          ) : (
            "News"
          )}
        </Button>
        <Button
          component={NavLink}
          to="/teams"
          color="inherit"
          sx={{ borderRadius: 2 }}
        >
          {location.pathname === "/teams" ? (
            <ActiveButton>Teams</ActiveButton>
          ) : (
            "Teams"
          )}
        </Button>
        <Button
          component={NavLink}
          to="/players"
          color="inherit"
          sx={{ borderRadius: 2 }}
        >
          {location.pathname === "/players" ? (
            <ActiveButton>Players</ActiveButton>
          ) : (
            "Players"
          )}
        </Button>
        {/* Show the current time and date on the right and make it update by second  */}
        <div style={{ marginLeft: "auto" }}>
          <Clock />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
