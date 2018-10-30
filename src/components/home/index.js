import React, {Component} from 'react';
import SearchBar from '../search-form';
import {Link} from 'react-router-dom';
import {Grid, Typography, Divider}  from '@material-ui/core';
import './home.css';
import img1 from '../../assets/pc.jpg';
import client1 from '../../assets/mslogo.jpg';
import Header from '../../components/layout/header';
import Footer from '../../components/layout/footer';


const style = {
    'minHeight': (window.innerHeight - 80)
}
export default class Home extends Component{ 

    constructor(props){
        super(props);
    }
    
    render(){
        return (<div><Header position={'fixed'}/><Grid container>
                <Grid container direction="column" alignItems="center" justify="center"  style={style} className={'homeBg'}>
                    <Grid item style={{marginBottom:20}}>
                        <Typography variant="h1" gutterBottom className={'heading3'}>
                            Search across millions of cases
                        </Typography>
                    </Grid>
                    <Grid item>
                        <SearchBar placement="home" history={this.props.history}/>
                    </Grid>
                </Grid>
                <Grid container direction='row' alignItems="center" className={'paddingLarge'}>
                    <Grid item md={6}>
                      <img src={img1} width="400"/>
                    </Grid>
                    <Grid item md={6}>
                    <Typography variant="h1" gutterBottom className={'heading3'}>
                        Our Services
                    </Typography>
                    <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                    </Grid>
                </Grid>

                <Grid container alignItems={'center'} justify={'center'} className={'rowGrid greyGrid'}>
                    <Grid item md={12} style={{marginBottom:30}}>
                        <Typography variant="h1" gutterBottom className={'heading3'} gutterBottom={true}>
                            Our Clients
                        </Typography>
                    </Grid>

                    <Grid item md={12} direction="row" container spacing={16} justify={'center'}>
                        <Grid item md={2}>
                            <img src={client1} width='200' />                            
                        </Grid>
                        <Grid item md={2}>
                            <img src={client1} width='200' />                            
                        </Grid>
                        <Grid item md={2}>
                            <img src={client1} width='200' />                            
                        </Grid>
                        <Grid item md={2}>
                            <img src={client1} width='200' />                            
                        </Grid>                        
                    </Grid>    
                </Grid>
                

                </Grid>
                <Footer/>
                </div>
        )
    }
    
}