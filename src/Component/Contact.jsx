import React, { Component } from 'react'
import { Cell, Grid , List,ListItem, ListItemContent} from 'react-mdl'

class Contact extends Component{
    render(){
        return(
            <>
              <div className="contact-Body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Ashutosh Patale</h2>
                        <img src="https://scontent.fnag1-2.fna.fbcdn.net/v/t1.6435-9/81458001_2873208282905552_6881817624410324992_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=174925&_nc_ohc=_dkgZIleL68AX8e--bz&_nc_oc=AQlnhe-F_jql86Oc7jZLAEXdVj71RMKmLKXRwBVlFlojM4EMQARdgLhcBEn5ftFUEN6A0QFcG15fe2tu-gS6H2Ba&_nc_ht=scontent.fnag1-2.fna&oh=08c58448ea452106d62532f509edb4ed&oe=60E3B696" 
                        alt="myimg"
                        className="contact-img"
                        />

                        <p style={{width:"75%",margin:'auto',padding:"4%"}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                         It has survived not only five centuries
                        </p>



                    </Cell>
                    <Cell col={6}>
                       
                <div className="contact-list" >
                <h2>Contact Me</h2>
                        <hr/>
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:"25px"} }>
                                    <i className="fa fa-phone-square" aria-hidden="true"   ></i> 8788113725 </ListItemContent>
                            </ListItem>
                           
                           
                            <ListItem>
                                <ListItemContent style={{fontSize:"25px"} }>
                                <i class="fab fa-linkedin" aria-hidden="true"></i>myLinkedIn Id</ListItemContent>
                            </ListItem>
                           
                            <ListItem>
                                <ListItemContent style={{fontSize:"25px"} }>
                                <i class="fas fa-envelope" aria-hidden="true"   ></i> akashpatale88@gmail.com</ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize:"25px"} }>
                                <i class="fab fa-skype"  aria-hidden="true"   ></i> mySkypeId</ListItemContent>
                            </ListItem>
                            
                            </List>
                   </div>
                    </Cell>

                </Grid>



              </div>



            </>
        )
    }
}


export default Contact