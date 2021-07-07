import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'react-mdl/extra/material.css';   
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { render } from 'react-dom'



render(


 // Use this after the variable declaration
  <React.StrictMode>
    <BrowserRouter>
  
    
    <App />
    
  
  
  
    </BrowserRouter>
   
  </React.StrictMode>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
