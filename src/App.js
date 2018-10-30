import React, { Component } from 'react';
import Routes from './services/routes';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const THEME = createMuiTheme({
  typography: {
   //"fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
   "fontFamily": 'Lato',
   "fontSize": 14,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  }
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={THEME}>
      <div className="App">        
        <Routes/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;