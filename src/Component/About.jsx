import React ,{Component} from 'react';
import {Grid ,Cell} from 'react-mdl';
import Education  from '../Component/Eduction';
import Exprience  from '../Component/Exprience';
import Skills  from '../Component/Skills';




class About extends Component{
    render(){
    return(
        <div>
        <Grid className="GridOne">
            <Cell className="resume-left-col" col={4}>
                <div className="about-us" style={{textAlign:'center'}}  >
                    <img src="https://scontent.fnag1-3.fna.fbcdn.net/v/t1.6435-9/159136274_3264587620434281_244168972708364547_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=u5U1pCwsnTEAX9AqMRw&_nc_ht=scontent.fnag1-3.fna&oh=59d52071c895120672289d10fd96c5f8&oe=60E4C44E" 
                    alt="avatar"
                    style={{height: '300px',borderRadius:"50%"}}
                    />
                </div>
                <h2 style={{paddingTop:'1em'}}>Ashutosh Patale</h2>
                <h4 style={{color:'grey'}}> Front-End Developer</h4>
                <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </p>

                <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                <h5>Address</h5>
                <p>Raisoni collage of Engineering , wagholi  412207</p>
                <h5>Phone-no</h5>
                <p>8237272161 / 8788113725</p>
                <h5>Email-ID</h5>
                <p>akashpatale88@gmail.com</p>
                <h5>Web</h5>
                 <p>http://developerashutosh.xyz/</p>
                <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />

            </Cell>
            <Cell className="resume-right-col" col={8} style={{backgroundColor:"black",color:"white"}}>
                <h2>Education</h2>
                <strong>SSC (10th)</strong>
                <Education 
                startYear={2012}
                endYear={2013}
                schoolName="RIKP Mohol , Solapur"
                schoolDescription="           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                />

                <strong>Diploma </strong> 
                <Education 
                startYear={2014}
                endYear={2017}
                schoolName="Government Polytechnic , Solapur"
                schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                />
               

                <strong>BE-Computer </strong> 
                <Education 
                startYear={2017}
                endYear={2020}
                schoolName="G.H.Raisoni Collage Of Engneering Wagholi , Pune"
                schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                />
                <hr style={{ borderTop:'3px sloid #e22947'}} />

            <h2>Exprience</h2>
            <Exprience 
                startYear={2019}
                endYear={2019}
                jobName="Web Developer Intern (6 months)"
                jobDescription=" Web Developer Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book "
            
            />

           
                <hr style={{ borderTop:'3px sloid #e22947'}} />

            <h2>Skills</h2>

            <Skills
             Skills="HTML5 /CSS3"
             progress={100}
            />
            <Skills
             Skills="javascript"
             progress={80}
            />
           
               <Skills
             Skills="Bootsrap"
             progress={90}
            />
               <Skills
             Skills="Mobile Responsive"
             progress={90}
            />
               <Skills
             Skills="React js/Hooks"
             progress={80}
            />

            
            </Cell>
        </Grid>
        </div>
    )

    }
}


export default About;