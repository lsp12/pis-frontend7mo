import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import App from './App';
import { Store } from './Store/Store';
import 'react-toastify/dist/ReactToastify.css';

const themes = createTheme(
  {
    palette: {
      mode: 'dark',

    },
  },
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <ThemeProvider theme={themes}>
        <BrowserRouter>
          <App />
          <ToastContainer />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById( 'root' ),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
