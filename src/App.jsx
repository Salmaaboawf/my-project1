import React from 'react';
import './App.css';

import ButtonAppBar from './AppBar';
import HomePage from './New';
import { Home } from '@mui/icons-material';
import { Router } from 'react-router-dom';
import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';
import Drewer from './Drewer';
import LoginPage from './Login';

// import { Button } from 'flowbite-react';


function App() {
  return (
    <>

    {/* <ButtonAppBar></ButtonAppBar> */}
    {/* <HomePage></HomePage> */}

     <Drewer></Drewer>
     {/* <LoginPage></LoginPage> */}
     
    </>
  );
}

export default App;
