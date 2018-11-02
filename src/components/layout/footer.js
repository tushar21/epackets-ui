import React from 'react';
import {Grid} from '@material-ui/core';
import './footer.css';
import {Link} from 'react-router-dom';
import {List, ListItem} from '@material-ui/core';
export default ()=>{
    return ( 
        <div className='footer'>
        <Grid container direction="row" alignContent={'center'} justify="center" alignItems="flex-start">
            <Grid item md={3} style={{marginTop: 20}}>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
            Copyright@2018
            </p>
            </Grid>
            <Grid item md={3}>
                <List className="footerList">
                    <ListItem>
                        <Link to={'/'}>Pricing</Link>
                    </ListItem>
                    <ListItem>
                        <Link to={'/'}>Signup</Link>
                    </ListItem>              
                    <ListItem>
                        <Link to={'/'}>Login</Link>
                    </ListItem>    
                </List>
            </Grid>
            <Grid item md={3}>
                <List className="footerList">
                    <ListItem>
                        <Link to={'/'}>Pricing</Link>
                    </ListItem>
                    <ListItem>
                        <Link to={'/'}>Signup</Link>
                    </ListItem>              
                    <ListItem>
                        <Link to={'/'}>Login</Link>
                    </ListItem>    
                </List>
            </Grid>
            <Grid item md={3}>
                <List className="footerList">
                    <ListItem>
                        <Link to={'/'}>Pricing</Link>
                    </ListItem>
                    <ListItem>
                        <Link to={'/'}>Signup</Link>
                    </ListItem>              
                    <ListItem>
                        <Link to={'/'}>Login</Link>
                    </ListItem>    
                </List>
            </Grid>           
        </Grid>
        {/* <Grid container alignItems={"center"} alignContent={"center"} className={'copyRightText'}>
            <Grid item md={12}>Copyright@2018 </Grid>
        </Grid> */}
        </div>
    )
}