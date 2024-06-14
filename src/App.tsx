import React from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Form from './Routes/Form';
import Details from './Routes/details';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/details" element={<Details/>} />
        </Routes>
    </Router>
  );
}

export default App;
