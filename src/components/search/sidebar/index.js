import React from 'react';
import {Grid, List, ListItem, Typography, Select, MenuItem } from '@material-ui/core';
//import {DecodeQuery} from '../../../utils/helper';

export default class SearchSidebar extends React.Component {

    constructor(props){
        super();
        this.state = {
            searchConfig : props.searchConfig.searchConfig,
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
    }

    componentWillMount(){

    }

    render(){
        return (
            <Grid item md={3} className="sidebar">
                <List>
                    {
                        this.state.allTypes.map((type, idx)=>{
                            return <ListItem key={idx}>{type}</ListItem>  
                        })
                    }
                </List>
            </Grid>
        )
    }
}