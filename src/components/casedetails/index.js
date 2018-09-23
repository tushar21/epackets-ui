import React, {Component} from 'react';
import Elastic from '../../services/elasticsearch';
import {Grid, List, ListItem, Typography, Select, MenuItem, Divider} from '@material-ui/core';

export default class CaseDetails extends Component{
    constructor(props){
        super();
        this.state = {
            details : null
        }
        Elastic.details(props.match.params.id, 'cases')
        .then((details)=>{
            this.setState({
                details: details.data._source
            });
        })
    }

    render(){
        return (
            <div>
                <Typography variant="display4" gutterBottom>{(this.state.details && this.state.details.title) ? this.state.details.title : ''}</Typography>
                <p> 
                {(this.state.details && this.state.details.description) ? this.state.details.description : ''}
                </p>

            </div>
        )
    }

}