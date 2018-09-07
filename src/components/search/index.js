import React, {Component} from 'react';
import {Grid, List, ListItem, Typography} from '@material-ui/core';
import {DecodeQuery} from '../../utils/helper';
import './search.css';
import Elastic from '../../services/elasticsearch';

const style = {
    minHeight: window.innerHeight
}
export default class SearchPage extends Component{

    constructor(props){
        super();
        this.state = {
            q : DecodeQuery(props.location.search),
            result : [],
            total : 0
        }
        let q = DecodeQuery(props.location.search)['q'];
        Elastic.search(q)
        .then((data)=>{
            let foundCases = data.data;
            console.log(data, "data.hits.hits");
            if(foundCases.hits && foundCases.hits.hits && foundCases.hits.hits.length){
                
                this.setState({result : foundCases.hits.hits, total: foundCases.hits.total});
            }
            else{
                this.setState({result: ["No results found"]});
            }
        })
    }

    render(){
        let ResultList = null;

        if(this.state.result && this.state.result.length){
            ResultList = this.state.result.map((result,idx)=>{
                return <ListItem key={idx}>{ (result._source && result._source.Carrier) ? result._source.Carrier : ''}xsdsadasd</ListItem>
            })
        }
                  
        return (
                <Grid container alignItems="stretch" justify="center" style={style}>
                    <Grid item md={3} className="sidebar">
                        this is sidebar
                    </Grid>
                    <Grid item md={9}>
                    <Typography variant="headline" gutterBottom align="left">
                        {this.state.total} total cases found 
                    </Typography>
                        <List>
                            {ResultList}
                        </List>
                    </Grid>
                </Grid>
        )
    }

}
