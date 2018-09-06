import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import {DecodeQuery} from '../../utils/helper';
import './search.css';

export default class SearchPage extends Component{

    constructor(props){
        super();
        console.log(props, "props in search page");
        this.state = {
            q : DecodeQuery(props.location.search)
        }
    }

    render(){
        return (
            <div>
                <Grid container alignItems="stretch" justify="center">
                    <Grid item md={4} className="sidebar">
                        this is sidebar
                    </Grid>
                    <Grid item md={8}>
                        this is content  {this.props.location.search}
                    </Grid>
                </Grid>
            </div>
        )
    }

}
