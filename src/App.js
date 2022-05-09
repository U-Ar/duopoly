import React, { useState, useEffect, useContext } from 'react';

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Loading from "./Loading";
import Redirect from "./Redirect";
import { apiConfig } from "./config";
import AppProvider from "./AppProvider";
import ContentContainer from "./ContentContainer";

import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//import { useSelector, useDispatch } from 'react-redux';
//import { AppContext } from "./AppProvider";

import { Container, Grid, Stack } from "@mui/material";

const theme = createTheme({
  shadows: ["none"],
  palette: {
    primary: {
      light: '#4fb3bf',
      main: '#00838f',
      dark: '#005662',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff263',
      main: '#fbc02d',
      dark: '#c49000',
      contrastText: '#000',
    },
  },
});

axios.defaults.withCredentials = true;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppProvider>
          <ContentContainer/>
        </AppProvider>
      </div>
    </ThemeProvider>
  );
}

/*
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <AppProvider>
            <Routes>
              <Route path="/" element={<ContentContainer/>}/>
              <Route path="redirect" element={<Redirect/>}/>
            </Routes>
          </AppProvider>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
*/

export default App;
