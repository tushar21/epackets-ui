import React, {Component} from 'react';
import {TextField, Grid, Select, MenuItem, Button} from '@material-ui/core';
import ElastcicSearch from '../../services/elasticsearch';
import './search.css';
import {Link} from 'react-router-dom';
export default class SearchBar extends Component{
    state = {
        query: null,
        operation : 'AND',
        operations: ["Add"]
    };

    handleChange = name => event => {
        console.log("Search text changed");
        this.setState({
            [name]: event.target.value,
        });
    };

    addOperationToQuery = (event)=> {
        this.setState({
            operation: event.target.value,
            query: this.state.query + " " + event.target.value 
        });
    }
    
    render(){
        return (<div className="fullHeight">
            <Grid container md={12} alignItems="flex-end">
                <Grid item md={8}>
                    <TextField className={'searchBar'}
                    id="query"
                    label="Search Your Query Here" 
                    value={this.state.query}
                    onChange={this.handleChange('query')}
                    />
                </Grid>
                <Grid item md={2}>
                <Select
                    value={this.state.operation}
                    onChange={this.addOperationToQuery}             
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={'AND'}>AND</MenuItem>
                    <MenuItem value={'OR'}>OR</MenuItem>
                    <MenuItem value={'NOT'}>NOT</MenuItem>
                </Select>
                </Grid>
                <Grid item md={2}>
                <Button variant="outlined">
                    <Link to="/about" className="link">Search</Link>
                </Button>
                </Grid>
            </Grid>
            </div>
        )
    }
}