import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Users from './components/Users/Users';
import Repositories from './components/Repositories/Repositories';
import Search from './components/Search/Search';

function App() {
  return (
    <div>
      <Search />

      <Router>
        <Switch>
          <Route exact path="/">
            <Users />
          </Route>
          <Route path="/users">
            <Redirect to="/" />
          </Route>
          <Route path="/repos">
            <Repositories />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
