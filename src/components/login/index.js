import React, {Component} from 'react';
import {Paper} from '@material-ui/core';
import {Grid} from '@material-ui/core';

export default class UserLogin extends Component{
    render(){
        return (
            <div>
                <Grid container style={style}>
                    <Paper><h2> this is login</h2> </Paper>
                </Grid>
            </div>
        )
    }
} 


const style = {
    paddingTop : '10px'
}
