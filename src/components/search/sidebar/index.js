import React from 'react';
import {Grid, List, ListItem, Typography, Select, MenuItem } from '@material-ui/core';
import './sidebar.css';
import Elastic from '../../../services/elasticsearch';

export default class SearchSidebar extends React.Component {

    constructor(props){
        super();
        this.state = {
            searchConfig : props.searchConfig,
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

        if(!this.state.searchConfig.type) this.state.searchConfig.type = 'cases';
    }


    handleClick(event){
        console.log(event.target.value, "event");
        Elastic.search(this.state.searchConfig)
        .then((data)=>{
            console.log(data, "data");
        });
    }
    
    componentWillMount(){
        
    }

    render(){
        return (
            <Grid item md={3} className="sidebar">
                <List>
                    {
                        this.state.allTypes.map((type, idx)=>{
                            return <ListItem className={(this.state.searchConfig.type == type) ? 'selectedType': ''} key={type} onClick={(e)=> this.handleClick(e) }>{type}</ListItem>  
                        })
                    }
                </List>
            </Grid>
        )
    }
}