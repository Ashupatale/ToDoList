import React, { Component } from 'react'
import {Layout, Header , Navigation,Drawer,Content} from 'react-mdl';
import Main from './Component/Main';
import {Link} from 'react-router-dom'
import './App.css'
// import Index from './Component/React-Redux'
// import Counter from  './Component/React-Redux/Container/CounterContainer'
 
  
class App extends Component{
    render(){

  return (
    <>
    {/* <Index/> */}

   
  
  <div className="demo-big-content">
  <Layout>
      <Header className="header-color"   title="Ashu's Portfolio" scroll>
          <Navigation>
              <Link to="/">Home</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/project">Projects</Link>
              <Link to="/contact">Contact</Link>
          </Navigation>
      </Header>
      <Drawer title="Ashu's Portfolio" style={{color:'red'}}>
          <Navigation>
                 <Link to="/">Home</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/project">Projects</Link>
              <Link to="/contact">Contact</Link>
          </Navigation>
      </Drawer>
      <Content>
          <div className="page-content" />
        
           <Main/>
      </Content>
  </Layout>
</div> 
      
    </>

  
)
       
}

  }


  export default App