import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './components/Users/Users';
import Repositories from './components/Repositories/Repositories';
import Search from './components/Search/Search';

function App() {
  return (
    <div>
      <Search />
      <Users />
      <Repositories />
    </div>
  );
}

export default App;
