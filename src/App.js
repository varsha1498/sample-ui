import React from 'react';
import logo from './logo.svg';

import SearchIcon from '@material-ui/icons/Search';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom'
import Home from './Components/Home'
import NewCustomer from './Components/NewCustomer'

function App() {
  return (
    <div className="App">
    <Router>
   
      <Route exact path='/' component={Home}/>
     
    
    </Router>
    </div>
  );
}

export default App;
