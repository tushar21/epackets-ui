import React from 'react';
import {Grid, List, ListItem, Typography, Select, MenuItem, Divider, TextField, Button, IconButton } from '@material-ui/core';
import './sidebar.css';
import Elastic from '../../../services/elasticsearch';
import {Serialize} from '../../../utils/helper';
import SearchIcon from '@material-ui/icons/Search';

export default class SearchSidebar extends React.Component {

    constructor(props){
        super();    
        console.log(props.searchConfig, "props.searchConfig");
        this.state = {
            searchConfig : {
                ...props.searchConfig,
                type : props.searchConfig.type || 'cases',
                startYear : props.searchConfig.startYear || '',
                endYear : props.searchConfig.endYear || ''
            },
            cases: [],
            statuses: [],
            briefs: [],
            lawyer: null,
            appelant: null, 
            opponent: null,  
            judge: null,     
            category: null,
            court: null,
            allTypes: ["cases", "statuses", "briefs"]
        }
        //if(!this.state.searchConfig.type) this.state.searchConfig.type = 'cases';

    }


    handleClick(event, type){
        this.setState({
            searchConfig : {
                ...this.state.searchConfig,
                type : type
            }
        }, ()=>{
            console.log(this.state.searchConfig, "this.state.searchConfig");
            console.log(Serialize(this.state.searchConfig), "Testing");
            let qryStr = '/search/?'+ Serialize(this.state.searchConfig);
            this.props.history.push(qryStr);
            window.location.reload();            
        })       
       
    }    
    
    handleStateChange(e, yearType){
        this.setState({
            searchConfig:{
                ...this.state.searchConfig,
                [yearType] : e.target.value
            }
        })        
    }

    render(){
        return (
            <Grid item md={3} className="sidebar">
                <Typography variant="headline" gutterBottom align="left" className={'sidebarHeading'}>
                   Filters
                </Typography>
                <List>
                    {
                        this.state.allTypes.map((type, idx)=>{
                            return <ListItem className={(this.state.searchConfig.type == type) ? 'selectedType': ''} key={idx} onClick={(e)=> this.handleClick(e, type) }>{type}</ListItem>  
                        })
                    }
                </List>
                <Divider />

                <Grid container>
                    <Grid item md={1}></Grid>
                    <Grid item md={10} className='inputFilterText'>
                        <TextField                         
                        label="Court"
                        defaultValue="" 
                        fullWidth   
                        onChange={(e)=>{this.props.handleFilterChange(e, "court")}}          
                        />    
                    </Grid>     
                    <Grid item md={1}></Grid>               
                </Grid>


                <Grid container>
                    <Grid item md={1}></Grid>
                    <Grid item md={10} className='inputFilterText'>
                        <TextField                         
                        label="Judge"
                        defaultValue="" 
                        fullWidth   
                        onChange={(e)=>{this.props.handleFilterChange(e, "judge")}}          
                        />    
                    </Grid>     
                    <Grid item md={1}></Grid>               
                </Grid>
                
                <Grid container>
                    <Grid item md={1}></Grid>
                    <Grid item md={10} className='inputFilterText'>
                        <TextField                         
                        label="Lawyer"
                        defaultValue="" 
                        fullWidth   
                        onChange={(e)=>{this.props.handleFilterChange(e, "lawyer")}}          
                        />    
                    </Grid>     
                    <Grid item md={1}></Grid>               
                </Grid>

                
                <Grid container  >
                    <Grid item md={1}></Grid>
                    <Grid item md={10} className='inputFilterText'>
                        <TextField                         
                        label="Appelant"
                        defaultValue="" 
                        fullWidth   
                        onChange={(e)=>{this.props.handleFilterChange(e, "appelant")}}        
                        />    
                    </Grid>     
                    <Grid item md={1}></Grid>               
                </Grid>
                


                <Grid container>
                    <Grid item md={1}></Grid>
                    <Grid item md={10} className='inputFilterText'>
                        <TextField                         
                        label="Opponent"
                        defaultValue="" 
                        fullWidth   
                        onChange={(e)=>{this.props.handleFilterChange(e, "opponent")}}          
                        />    
                    </Grid>
                    <Grid item md={1}></Grid>
                </Grid>
                <Divider />

                <Grid container  alignContent="center" alignItems="center">
                    <Grid item md={1}></Grid>
                    <Grid item md={4} className='inputFilterText'>
                        <TextField  
                        label="From Year"                       
                        value={this.state.searchConfig.startYear} 
                        fullWidth 
                        onChange={(e)=>this.handleStateChange(e, "startYear")}
                        /> 
                    </Grid> 
                    <Grid item md={1}>-</Grid>    
                    <Grid item md={4} className='inputFilterText'>
                        <TextField      
                        label="To Year"                   
                        value={this.state.searchConfig.endYear} 
                        fullWidth 
                        onChange={(e)=>this.handleStateChange(e, "endYear")}
                        /> 
                    </Grid>     
                    <Grid item md={1}>
                    <IconButton color="primary" onClick={(e)=>{this.props.handleYearFilterChange(this.state.searchConfig.startYear,this.state.searchConfig.endYear)}} >
                        <SearchIcon/>
                    </IconButton>
                        
                    </Grid> 
                    <Grid item md={1}></Grid>               
                </Grid>



            </Grid>
        )
    }
}