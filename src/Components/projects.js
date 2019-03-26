import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component{
    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories(){

        if(this.state.activeTab === 0){
            return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png) center / cover'}}>React Project #1</CardTitle>
                    <CardText>
                        Dummy Text
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            )
             
        } 
        else if(this.state.activeTab === 1){
            return(
                <div><h1>This is Unity</h1></div>
            )
        }   
      
    }




    render(){
        return(
        <div className="projects-background"/* style={{backgroundImage: "url(https://images.pexels.com/photos/988872/pexels-photo-988872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)"}}*/>
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={tabId => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Unity</Tab>
                 </Tabs> 

                 <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                 </section>
            </div>
        </div>
        )
    }
}

export default Projects;