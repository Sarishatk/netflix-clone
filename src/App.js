import React from 'react';
import NavBar from './component/NavBar/NavBar'; 
import {originals,action,comedy } from './urls'
import './App.css';
import Banner from './component/banner/Banner';
import RowPost from './component/Rowpost/RowPost';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='netflix originals' /> 
      <RowPost url={action} title='Action' isSmall/> 
      <RowPost url={comedy} title='Horror movies' isSmall/> 
 

       </div>
  );
}

export default App;
