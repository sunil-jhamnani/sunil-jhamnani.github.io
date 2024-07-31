import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // WHAT TO SHOW
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //WHERE TO SHOW
  document.getElementById('root')
);

reportWebVitals();
