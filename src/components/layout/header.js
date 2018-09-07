import {Grid} from '@material-ui/core';
import React, {Component} from 'react';
import logo from '../../assets/logo.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LoginHeader from './header-login';
import DefaultHeader from './header-default';
import SearchForm from '../search-form';
export default class Header extends Component{
    constructor(){
        super();
    }

    render(){

        let LOGGEDIN_USER = localStorage.getItem('LOGGEDIN_USER') ? JSON.parse(localStorage.getItem('LOGGEDIN_USER')) : null;
        let header = <DefaultHeader/>

        if(LOGGEDIN_USER){
            header = <LoginHeader user={LOGGEDIN_USER}/>
        }
        
        return ( 
            <div style={{flexGrow: 1}}>
                <AppBar position="static" color="default">
                    <Toolbar> 
                        <Grid container alignItems="center" justify="space-between">
                            <Grid item md={3}>
                                <img src={logo} width={100} alt={"sdsdsa"}/>
                            </Grid>
                            <Grid item md={6}>
                                {/* <SearchForm/> */}
                            </Grid>
                            <Grid item md={3}>
                                {header}
                            </Grid> 
                        </Grid>                        
                    </Toolbar>
                </AppBar>                         
            </div>
        )
    }
}