import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import Header from '../layout/header';
import Footer from '../layout/footer';
import '../../App.css';

import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import PlaceIcon from '@material-ui/icons/Place';

export default ()=>{
    return (
        <div>
            <Header/>
                <Grid container direction={'row'} className={'content'} alignContent={'center'} justify={'center'}>
                    <Grid container justify={'center'}>
                    <Grid item md={6}>
                        <Typography component="h1" variant="h1" gutterBottom >
                                Contact Us
                        </Typography>

                        <Typography component="h2" variant="h1" gutterBottom >
                            Have questions? Get answers from the our team.
                        </Typography>
                    </Grid>
                    </Grid>


                    <Grid container justify={'center'} alignContent={'center'}>
                        <Grid container  md={6}>
                        <Grid item md={6}>
                            <Typography component="h2" variant="h4" gutterBottom><PhoneIcon/> Phone </Typography>
                            <Typography>
                                +1234567890
                            </Typography>
                        </Grid>
                        <Grid item md={6}>
                            <Typography component="h2" variant="h4" gutterBottom><EmailIcon/> Email </Typography>
                            <Typography>
                                test@example.com
                            </Typography>
                        </Grid>
                        </Grid>
                    </Grid>

                    <Grid container justify={'center'} alignContent={'center'}>
                    <Grid container  md={6}>
                        <Grid item md={12}>
                            <Typography component="h2" variant="subheading" gutterBottom><PlaceIcon/> 330 Townsend Street, Suite 100 San Francisco, CA 94107 </Typography>
                        </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            <Footer/>
        </div>
    )

}