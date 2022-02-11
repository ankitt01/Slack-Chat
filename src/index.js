import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './index.css';
// import 'semantic-ui-css/semantic.min.css'
import App from './components/App';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

ReactDOM.render(
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  </>,
  document.getElementById('root')
);

