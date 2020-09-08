import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom';
import './App.scss';
import Users from './components/Users/Users';
import Repositories from './components/Repositories/Repositories';
import Search from './components/Search/Search';

function App() {
  return (
    <div>
      <Router>
        <Search />
        <Switch>
          <Route exact path="/"  component={Users} />
          <Route path="/users" >
            <Redirect to="/" />
          </Route>
          <Route path="/repositories" title="test" component={Repositories}  />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
