import {Grid} from '@material-ui/core';
import React, {Component} from 'react';
import logo from '../../assets/logo.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LoginHeader from './header-login';
import DefaultHeader from './header-default';
import SearchForm from '../search-form';
import { Link } from 'react-router-dom';
import './header.css';
export default class Header extends Component{
    constructor(props){
        super();
        console.log(props, "props inside header.js")
    }

    render(){

        let position = this.props.position? this.props.position : 'static';

        let classes = 'staticHeader';

        if(this.props.position && this.props.position == 'fixed'){
            classes = 'fixedHeader transparentBg noShadow'
        }


        let LOGGEDIN_USER = localStorage.getItem('LOGGEDIN_USER') ? JSON.parse(localStorage.getItem('LOGGEDIN_USER')) : null;
        let header = <DefaultHeader/>

        if(LOGGEDIN_USER){
            header = <LoginHeader user={LOGGEDIN_USER}/>
        }
        
        return ( 
            <div style={{flexGrow: 1}}>
                <AppBar position={position} color="default" className={classes}>
                    <Toolbar className={'transparentBg'}> 
                        <Grid container alignItems="center" justify="space-between">
                            <Grid item md={3}>
                                <Link to={'/'}><img src={logo} width={100} alt={"logo"}/></Link>
                            </Grid>
                            <Grid item md={6} className={'large-font'}>
                                <Link className={'headerLinks'} to={'/'}>About Us</Link>
                                
                                <Link className={'headerLinks'} to={'/'}>Contact Us</Link>

                                <Link className={'headerLinks'} to={'/'}>Blog</Link>
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