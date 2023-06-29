import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import Todolist from './Todolist';
import Navbar from './Navbar';


function App() {
  return (
    <>
<CssBaseline/>
<Navbar/>
<Todolist/>
    </>
  )
}

export default App
