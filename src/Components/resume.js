import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
        return(
            <div className="resume-background" /*style={{backgroundImage: "url(https://images.pexels.com/photos/988872/pexels-photo-988872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)"}}*/>
                <Grid>
                    <Cell col ={4}>
                    <div style={{ textAlign: 'center'}}>
                    <img src="https://media.licdn.com/dms/image/C4D03AQEy6MT0yLHwFg/profile-displayphoto-shrink_200_200/0?e=1556150400&v=beta&t=s-_zy8xABP9jILYCPazpJuulU0OQay9aKn7eWPtTMGc"
                    alt="avatar"
                    style={{height: '400px'}}
                    />
                    </div>
                    
                    <h2 style={{paddingTop: '1em'}}>Ethan Slagle</h2>
                    <h4 style={{color: 'gray'}}>Programmer</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                    <p>Aspiring game and web developer, proficient in multiple programming languages. Studied full stack web development at Academy Pittsburgh in Allentown, Pennsylvania. Quick learner, critical thinker, and problem solver constantly seeking to better my skills by working with a goal-oriented team. Seeking an entry-level position in web development, game development, software engineering, or quality assurance testing.</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                    <h5>Address</h5>
                    <p>511 Callendale Lane, Durham, NC 27703</p>
                    <h5>Phone</h5>
                    <p>412-926-6985</p>
                    <h5>Email</h5>
                    <p>ethanslagle3@yahoo.com</p>
                    <h5>Web</h5>
                    <p>mywebsite.com</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                    </Cell>
                    <Cell className="resume-right-col" col ={8}>
                        <h2>Education</h2>



                        <Education
                            startYear={2013}
                            endYear={2017}
                            schoolName="Ohio University"
                            schoolDescription=""
                            schoolDescription2=""
                            schoolDescription3=""
                            schoolDescription4= ""
                            />

                            <Education
                                startYear={2017}
                                endYear={2018}
                                schoolName="Academy Pittsburgh"
                                schoolDescription="Collaborated with classmates on numerous projects through an agile approach"
                                schoolDescription2="Worked with languages and frameworks such as, C#, Ruby, SQL, .NET, React, HTML, CSS, Javascript, Python, Git, TDD, Ruby on Rails, Angular.JS, MVC apps, and advanced algorithms"
                                schoolDescription3="Started a few solo side projects, including a visual novel video game and a portfolio website"
                                schoolDescription4= "Worked on the backend of an application which allowed users to be added into a database in order to remotely unlock the door of the Academy from their mobile device"
                                />
                                <hr style={{borderTop: '3px solid #e22947'}}/>

                            <h2>Experience</h2>

                        <Experience
                            startYear={2017}
                            endYear={2018}
                            jobName="Help Desk Analyst, American Eagle"
                            jobDescription="Provided various forms of tech support to American Eagle stores across four countries, including idevice troubleshooting, password/account resets, wifi connectivity assistance, and hardware assembly"
                            jobDescription2="Coordinated with a group of 20+ colleagues across various platforms to maintain constant communication with the team and accomplish the united goals"
                            jobDescription3="Learned various skills ranging from increased familiarity with hardware (PC laptops/desktops, idevices etc.) to the use of numerous softwares (Jira ticketing system, airwatch, etc.)"
                            jobDescription4=""                        
                        />

                        <Experience
                            startYear={2011}
                            endYear={2017}
                            jobName="Manager, Wagner's Market"
                            jobDescription="Collaborated with a crew of up to 10 other employees" 
                            jobDescription2="Managed 3-4 employees during night shifts"
                            jobDescription3="Provided timely customer service "
                            jobDescription4=""                       
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>

                        <Skills 
                            skill="javascript"
                            progress={60}
                        />
                        <Skills 
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skills 
                            skill="React"
                            progress={55}
                        />
                        <Skills 
                            skill="C#"
                            progress={60}
                        />
                         <Skills 
                            skill="Python"
                            progress={60}
                        />
                         <Skills 
                            skill="Unity"
                            progress={75}
                        />





                    </Cell>
                
                </Grid>
 

             </div>
        )
    }
}

export default Resume;