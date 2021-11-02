import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import GraphqlProvider from './providers/graphql/GraphqlProvider';
import GraphqlClient from './api/graphql/GraphqlClient';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/css/animate.min.css';
import './styles/css/noscript.css';
import './styles/css/index.css';

ReactDOM.render(
  <StrictMode>
    <GraphqlProvider client={GraphqlClient}>
      <Router>
        <App />
      </Router>
    </GraphqlProvider>
  </StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
