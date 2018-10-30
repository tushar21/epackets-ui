import React, {Component} from 'react';
import {Grid, List, ListItem, Typography, Table,TableBody, TableCell, TableRow} from '@material-ui/core';
import Elastic from '../../services/elasticsearch';
import './search-form.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import IconArrowDropdown from '@material-ui/icons/ArrowDropDown';

const searchTechniques = [{
    id : 1,
    label : "AND",
    example: "fraud AND damages",
    description: "Both terms will be needed in document"
},
{
    id: 2,
    label : "OR",
    example: "fraud OR damages",
    description: "Eighther one of them needed in document"
},
{
    id: 3,
    label : "NOT",
    example: "fraud NOT damages",
    description: "terms must not appear in document"
},
{
    id: 4,
    label : '""',
    example: '"fraud damages"',
    description: "Exact match"
}];

export default class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {
            query: '',
            operation : '',
            operations: ["Add"],
            results : [],
            showOptions: false,
            showAutoCompleteResults : false
        };
        this.showOptions = this.showOptions.bind(this);
        this.addOperationToQuery =  this.addOperationToQuery.bind(this);
    }    

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
        setTimeout(()=>{
            Elastic.search({q: this.state.query, limit: 5}).then((cases)=>{                
                this.setState({results: cases.data.hits.hits, showAutoCompleteResults: true, showOptions: false});
                //console.log(cases.data.hits, "search result after change");
            });
        }, 1000);
    };

    addOperationToQuery = (event)=> {
        this.setState({
            query: this.state.query + " " + event 
        });
    }
 
    showOptions(event){
        let shopOptionsUpdated  = this.state.showOptions ? false : true;
        this.setState({
            showOptions: shopOptionsUpdated,
            showAutoCompleteResults: false
        })
    }

    searchSubmit(){
        this.props.history.push('/search?q='+this.state.query);
    }   
    
    caseDetails(e, caseId){
        let qryStr = "/case/"+caseId;
        this.props.history.push(qryStr);        
    }


    render(){ 
        let ResultList = null;
        if(this.state.results && this.state.results.length){
            ResultList = this.state.results.map((result,idx)=>{
                return <div><ListItem key={idx} className="listItem" onClick={(e)=>this.caseDetails(e, result._id)}><Typography variant="title">{(result._source && result._source.title) ? result._source.title : ''}</Typography></ListItem></div>
            })
        }

        return (<div className={this.props.placement}>
            <Grid container alignItems="center" justify={'center'} spacing={16} className="searchOutline">
                <Grid item md={10}>
                <form onSubmit={()=>this.searchSubmit()}>
                    <input type="text" className={'searchInput'}
                    placeholder="Search your query here" 
                    value={this.state.query}
                    onChange={this.handleChange('query')}
                    />
                    </form>  
                </Grid>
                <Grid item md={1} className="borderRight"> 
                    <IconArrowDropdown className={'ArrowDropIcon'} onClick={this.showOptions}/>                           
                </Grid>
                <Grid item md={1}>
                    <SearchIcon onClick={()=>this.searchSubmit()} className={'searchIcon'}/>
                </Grid>
            </Grid>

            <Grid container alignItems={'search'} justify="center" style={{marginTop: 8}}>
                {this.state.showOptions ? <Grid item md={12} style={{padding:0}} className={'optionsList'} >                   
                    
                    <Table>                        
                        <TableBody>
                        {searchTechniques.map(row => {
                            return (
                            <TableRow key={row.id} onClick={()=>{this.addOperationToQuery(row.label)}} className={'cursor'}>
                                <TableCell component="th" scope="row">
                                {row.label}
                                </TableCell>
                                <TableCell>{row.example}</TableCell>
                                <TableCell>{row.description}</TableCell>
                            </TableRow>
                            );
                        })}
                        </TableBody>
                    </Table>
                </Grid> : ''}
            </Grid>

            { (ResultList && this.state.showAutoCompleteResults)? <Grid container alignItems="stretch" justify="center" spacing={16} className="searchResults">
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