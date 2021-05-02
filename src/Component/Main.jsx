import React from 'react'
import { Route, Switch } from 'react-router'
import About from './About'
import LandingPage from './LandingPage'
import Project from './Project'
import Contact from './Contact'

const Main =()=>{
    return(

    
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route  path="/aboutme" component={About}/>
        <Route  path="/project" component={Project}/>
        <Route  path="/contact" component={Contact}/>

    </Switch>
    )
}

export default Main