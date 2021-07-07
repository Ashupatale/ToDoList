import React, { Component, useState } from 'react'
import {Layout, Header , Navigation,Drawer,Content} from 'react-mdl';
import Main from './Component/Main';
import {Link} from 'react-router-dom'
import './App.css'
import Giphy from './Component2/Giphy'
import Cookies from './Cookies';
import NewToDo from './NewToDo';
import ToDo from './UtubeComp/ToDo1';
import Form from './GetReady/Form';
import Form1 from './GetReady/Form1';
import TodoList from './MyToDoApp/ToDoList'


const App=()=> {
 return (
         <>
    
        {/* //  <Giphy/> */}
 


{/* <Cookies/> */}
{/* <ToDo/> */}
{/* <Api/> */}
{/* <Form/> */}
{/* <Form1/> */}

{/* <NewToDo/> */}

<TodoList/>



  </> 
)
       
}

export default App; 

