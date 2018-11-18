import React, {Component} from 'react';
import Elastic from '../../../services/elasticsearch';
import {Grid, List, ListItem, Typography, Divider, Paper} from '@material-ui/core';
import Header from '../../../components/layout/header';
import Footer from '../../../components/layout/footer';

export default class BriefDetails extends Component{
    constructor(props){
        super();
        this.state = {
            details : null
        }
        Elastic.details(props.match.params.id, 'briefs')
        .then((details)=>{
            this.setState({
                details: details.data._source
            });
        })
    }

    render(){
        let rawDesc =  (this.state.details && this.state.details.description) ? this.state.details.description : '';
        return (
            <div>
                <Header/>
                <Grid container direction={'column'} style={{paddingLeft:20, paddingRight: 20 }}>
                    <Grid item md={12}>
                        <Typography variant="display4" gutterBottom>
                            {(this.state.details && this.state.details.title) ? this.state.details.title : ''}
                            <Divider/>
                        </Typography>
                    </Grid>
                    <Grid item md={12}>
                        <p dangerouslySetInnerHTML={{__html: rawDesc}} />   
                    </Grid>
                </Grid>
                <Footer/>
            </div>
        )
    }
}