import React, {Component} from 'react';
import SearchBar from '../search-form';
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import './home.css';
 
const style = {
    'minHeight': (window.innerHeight - 80)
}
export default class Home extends Component{ 
    render(){
        return (
                <Grid container direction="column" alignItems="center" justify="center"  style={style}>
                    <Grid item>
                        <SearchBar placement="home"/>
                    </Grid>
                </Grid>
        )
    }
    
}