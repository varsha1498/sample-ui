import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchIcon from '@material-ui/icons/Search';

import Search from "./Components/Search";
import Appbar from "./Components/Appbar"
import Table from "./Components/Table"

function App() {
  return (
    <div className="App">
     <Appbar/>
     <div>
     <SearchIcon style={{width:"80px",marginTop:"70px"}} />
    
     <text>Search</text>
     
       <button style={{marginLeft:"50px", height:"40px",backgroundColor:"green"}}> Create New product</button>
     </div>
     <Table/>
    </div>
  );
}

export default App;
