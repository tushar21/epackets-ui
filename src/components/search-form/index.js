import React, {Component} from 'react';
import {Grid, Select, MenuItem, Button, List, ListItem, Typography} from '@material-ui/core';
import Elastic from '../../services/elasticsearch';
import './search-form.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

export default class SearchBar extends Component{

    constructor(props){
        super();
        this.state = {
            query: '',
            operation : '',
            operations: ["Add"],
            results : []
        };
    }    

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
        setTimeout(()=>{
            Elastic.search({q: this.state.query, limit: 5}).then((cases)=>{                
                this.setState({results: cases.data.hits.hits});
                //console.log(cases.data.hits, "search result after change");
            });
        }, 1000);
    };

    addOperationToQuery = (event)=> {
        this.setState({
            query: this.state.query + " " + event.target.value 
        });
    }
    
    render(){ 
        let ResultList = null;
        if(this.state.results && this.state.results.length){
            ResultList = this.state.results.map((result,idx)=>{
                return <div><ListItem key={idx} className="listItem"><Typography variant="title">{(result._source && result._source.title) ? result._source.title : ''}</Typography></ListItem></div>
            })
        }

        return (<div className={this.props.placement}>
            <Grid container alignItems="stretch" spacing={16} className="searchOutline">
                <Grid item md={10}>
                    <input type="text" className={'searchInput'}
                    placeholder="Search Your Query Here" 
                    value={this.state.query}
                    onChange={this.handleChange('query')}
                    />  
                </Grid>
                {/* <Grid item md={1} className="borderRight">
                <Select
                    value={this.state.operation}
                    onChange={this.addOperationToQuery} classes={{icon:'icon', selectMenu: 'selectMenu', root: 'selectRoot'}}       
                >
                    <MenuItem value=""><em>None</em></MenuItem> 
                    <MenuItem value={'AND'}>AND</MenuItem>
                    <MenuItem value={'OR'}>OR</MenuItem>
                    <MenuItem value={'NOT'}>NOT</MenuItem>
                </Select>
                </Grid> */}
                <Grid item md={1}>
                <Button variant="outlined">
                    <Link to={"/search?q="+this.state.query} className="link"><SearchIcon/></Link>
                </Button>
                </Grid>
            </Grid>

            { ResultList? <Grid container alignItems="stretch" justify="center" spacing={16} className="searchResults">
                <Grid item md={12} style={{padding:0}}>
                    <List className='caseAutocomplete'>
                       {ResultList}
                    </List>
                </Grid>
            </Grid> : ''}
            </div>
        )
    }
}