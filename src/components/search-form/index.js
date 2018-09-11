import React, {Component} from 'react';
import {TextField, Grid, Select, MenuItem, Button} from '@material-ui/core';
import ElastcicSearch from '../../services/elasticsearch';
import './search-form.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

export default class SearchBar extends Component{

    constructor(props){
        super();
        console.log(props, "props in search component");
        this.state = {
            query: '',
            operation : '',
            operations: ["Add"]
        };
    }    

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    addOperationToQuery = (event)=> {
        this.setState({            
            query: this.state.query + " " + event.target.value 
        });
    }
    
    render(){
        return (<div className={this.props.placement}>
            <Grid container alignItems="stretch" justify="center" spacing={16} className="searchOutline">
                <Grid item md={8}>
                    <input type="text" className={'searchInput'}
                    placeholder="Search Your Query Here" 
                    value={this.state.query}
                    onChange={this.handleChange('query')}
                    />  
                </Grid>
                <Grid item md={1} className="borderRight">
                <Select
                    value={this.state.operation}
                    onChange={this.addOperationToQuery} classes={{icon:'icon', selectMenu: 'selectMenu', root: 'selectRoot'}}       
                >
                    <MenuItem value=""><em>None</em></MenuItem> 
                    <MenuItem value={'AND'}>AND</MenuItem>
                    <MenuItem value={'OR'}>OR</MenuItem>
                    <MenuItem value={'NOT'}>NOT</MenuItem>
                </Select>
                </Grid>
                <Grid item md={1}>
                <Button variant="outlined">
                    <Link to={"/search?q="+this.state.query} className="link"><SearchIcon/></Link>
                </Button>
                </Grid>
            </Grid>
            </div>
        )
    }
}