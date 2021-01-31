import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./styles/css/font-awesome/css/font-awesome.min.css";
import "./styles/css/ionicons/css/ionicons.min.css";
import "./styles/css/foundation/foundation.min.css";
import "./styles/css/main.css";
import "./styles/css/reset.css";
import "./styles/css/dist/sweetalert.css";
import "./styles/css/3d-panelstyles.css";
import "./styles/css/3d-nav.css";
import "./styles/css/animate.min.css";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
