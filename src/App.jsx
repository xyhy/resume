import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

import picture from './main.jpg';

function App() {
  return (
    <>
      <div className='back'>
        <img src={picture} id='mainpicture' />

        <Link to='/about' id='main-about' reloadDocument>About</Link>
        <Link to='/project' id='main-project' reloadDocument>Projects</Link>
        <Link to='/course' id='main-course' reloadDocument>Courses</Link>
        <Link to='/contact' id='main-contact' reloadDocument>Contact</Link>
      </div>
    </>
  );
}

export default App;
