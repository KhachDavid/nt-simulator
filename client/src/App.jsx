import React, { lazy, useEffect } from "react";

import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FabllbackProvider } from "./components/FallbackProvider";
import { ModalProvider } from "./components/ModalProvider";
import { getNationsRequest } from "./store/actions/nation.action";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import "nprogress/nprogress.css";

const [Home, News, Players, Teams, TeamView] = [
  import("./pages/Home"),
  import("./pages/News"),
  import("./pages/Players"),
  import("./pages/Teams"),
  import("./pages/TeamView"),
].map((component) => lazy(() => component));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNationsRequest());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ModalProvider>
        <FabllbackProvider>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/players" element={<Players />} />
              <Route path="/news" element={<News />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/teams/:teamId" element={<TeamView/>} />
              <Route path="/" element={<Home />} />
            </Routes>
          </ThemeProvider>
        </FabllbackProvider>
      </ModalProvider>
    </BrowserRouter>
  );
}
