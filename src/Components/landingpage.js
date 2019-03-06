import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component{
    render(){
        return(
            <div style ={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                <Cell col={12}>
                <img
                src="https://cdn3.iconfinder.com/data/icons/user-icon-3-1/100/user_3_Artboard_1-512.png"
                alt="avatar"
                className="avatar-img"
                />

                <div className="banner-text">
                <h1>Aspiring Web and Game Developer</h1>

                <hr/>

                <p>HTML/CSS | JavaScript | React | C# | Python | Unity </p>

                </div>
                </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;