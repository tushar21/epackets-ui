import React, {Component} from 'react';
import SearchBar from '../search-form';
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';


export default class Home extends Component{
    
    render(){
        return (
            <div>
                <Grid container alignItems="stretch" justify="center">
                    <SearchBar/>                    
                </Grid>
            </div>

        )
    }

    
}