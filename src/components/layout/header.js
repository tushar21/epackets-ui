import {Grid} from '@material-ui/core';
import React, {Component} from 'react';
import logo from '../../assets/logo.png';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom';

export default class Header extends Component{
    render(){
        return (
            <div style={{flexGrow: 1}}>
                <AppBar position="static" color={'transparent'}>
                    <Toolbar> 
                    <Grid container>
                        <Grid item md={2}>
                            <img src={logo} width={100} alt={"sdsdsa"}/>
                        </Grid>
                        <Grid item md={6}>
                            &nbsp; 
                        </Grid>
                        <Grid item md={4} justify={"center"}>
                        <Link to="/login">
                        <Button variant="contained" color="primary">
                            Login
                        </Button>
                        </Link>
                        &nbsp;
                        <Button variant="contained" color="primary">
                            Signup
                        </Button>
                        </Grid>
                    </Grid>
                        
                    </Toolbar>
                </AppBar>
                {/* <Grid container>
                    <Grid item md={4}>
                        <img src={logo} width={200} alt={"sdsdsa"}/>
                    </Grid>
                    <Grid item md={8}>
                    <Button variant="contained" color="primary">
                        Login
                    </Button>
                    &nbsp;
                    <Button variant="contained" color="primary">
                        Signup
                    </Button>
                    </Grid>
                </Grid> */}         
            </div>
        )
    }
}