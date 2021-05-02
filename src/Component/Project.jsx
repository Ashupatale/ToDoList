import React, { Component } from 'react'
import { Cell, Grid, Tab, Tabs, Card,CardTitle,CardText,CardActions,CardMenu,Button, IconButton} from 'react-mdl'

class Project extends Component{

    constructor(props){
        super(props)
        this.state={activeTab:0}
    }

    toggleCatagories(){ 
        if(this.state.activeTab === 0){
            return (
               <div className="FirstDiv"   style={{display:"flex"}}>
                 <Card shadow={5} className="CardOne"   style={{width: '350px', margin: 'auto', height:"400px"}}>
                    <CardTitle style={{color: '#fff', height: '250px', 
                    background: 'url(https://th.bing.com/th/id/OIP.06LKkM3ogOgyR8-uWXvw9wHaEK?w=292&h=180&c=7&o=5&pid=1.7) center/cover '}}>Welcome</CardTitle>
                    <CardText>
                           <strong> Hello This Is my personal Portfolio Website. I have Created this by HTML, CSS/SASS AND JAVASCRIPT
                            Used HTML, CSS and JAVASCRIPT to build all the pages.
                            Used JAVASCRIPT for page functionalities.</strong>
                    </CardText>
                    <CardActions border>
                    <a href ="http://developerashutosh.xyz/" target="_blank"  rel="noreferrer" > <Button  colored >Go To Portfolio</Button></a>

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card> 

                <Card shadow={5} style={{width: '350px', margin: 'auto', height:"400px"}}>
                    <CardTitle style={{color: '#fff', height: '250px', 
                    background: 'url(https://th.bing.com/th/id/OIP.iWGYYHQ8bCGRQRa8nY3TeAHaD5?w=290&h=180&c=7&o=5&pid=1.7) center/cover '}}>Welcome</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                    <Button colored>Lets Check</Button>

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="download" />
                    </CardMenu>
                </Card>
                
                </div>
                            )

                           
                        }

        if(this.state.activeTab === 1){
            return(
                <div style={{display:"flex"}}>

                <Card shadow={5} style={{width: '350px', margin: 'auto' ,height:"400px"}}>
                    <CardTitle style={{color: '#fff', height: '350px', 
                    background: 'url(https://th.bing.com/th/id/OIP.REYS-TEdm8kChDNqfPtzcAFNC7?w=290&h=180&c=7&o=5&pid=1.7) center / cover'}}>Welcome</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>Lets Check It</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{width: '350px', margin: 'auto' ,height:"400px"}}>
                    <CardTitle style={{color: '#fff', height: '350px', 
                    background: 'url(https://th.bing.com/th/id/OIP.REYS-TEdm8kChDNqfPtzcAFNC7?w=290&h=180&c=7&o=5&pid=1.7) center / cover'}}>Welcome</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>Lets Check It</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>


                </div>
            )

           

        }

        if(this.state.activeTab === 2){
            return(
                <div style={{display:"flex"}}>
                <Card shadow={5} style={{width: '350px', margin: 'auto',height:'400px'}}>
                    <CardTitle style={{color: '#fff', height: '250px', 
                    background: 'url(https://th.bing.com/th/id/OIP.sJZEKKRnzk1SUB9M-fvGQAHaEy?w=263&h=180&c=7&o=5&pid=1.7)  center / cover '}}>Welcome</CardTitle>
                    <CardText>
                    <strong> Hello This Is my personal Portfolio Website. I have Created this with the help of React App
                           
                            Used React-Mdl for Material Design, UI-gradientes to beautifull color gradients  </strong>
                    </CardText>
                    <CardActions border>
                      <a href="https://github.com/Ashupatale/AshuPortfoliowebsite" target="_blank" rel="noreferrer"> <Button colored>My Portflio</Button></a> 
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{width: '350px', margin: 'auto',height:'400px'}}>
                    <CardTitle style={{color: '#fff', height: '250px', 
                    background: 'url(https://th.bing.com/th/id/OIP.sJZEKKRnzk1SUB9M-fvGQAHaEy?w=263&h=180&c=7&o=5&pid=1.7)  center / cover '}}>Welcome</CardTitle>
                    <CardText>
                     <strong>Here Are some of projects in React...
                     React provides a great Exprience in UI. Lets chcek some of my projects Now</strong>
                    </CardText>
                    <CardActions border>
                       <a href="https://codesandbox.io/dashboard/home?workspace=c6d54d6f-747d-4908-b1ba-c10efeb1eb8d" target="_blank" rel="noreferrer"><Button colored>Lets Check</Button></a> 
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="download" />
                    </CardMenu>
                </Card>
                </div>
            )
        }
    }

 



    render(){
        return(
            <>
               <div className="categ-tabs">
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab: tabId})}>
                        <Tab>HTML CSS / JS</Tab>
                        <Tab>BOOTSTRAP</Tab>
                        <Tab>REACT JS</Tab>
                        
                    </Tabs>

                    <section className="section">
                        <Grid>
                            <Cell col={12}>
                                <div className="content">{this.toggleCatagories()}</div>
                            </Cell>
                        </Grid>

                    </section>

                   



               </div>



            </>
        )
    }
}


export default Project