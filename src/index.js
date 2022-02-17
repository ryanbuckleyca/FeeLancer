import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from './app';
import * as serviceWorker from './serviceWorker';
import './index.scss'

require('dotenv').config()

// TODO: add scope?
// could obviate need for getting token for delete/update
// https://auth0.com/blog/complete-guide-to-react-user-authentication/#Configure.React.to.connect.with.the.Express.API

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
