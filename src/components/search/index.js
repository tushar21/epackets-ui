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
            if(foundCases.hits && foundCases.hits.hits && foundCases.hits.hits.length){
                this.setState({result : foundCases.hits.hits, total: foundCases.hits.total});
            }           
        })
    }

    render(){
        let ResultList = "No results found";

        if(this.state.result && this.state.result.length){
            ResultList = this.state.result.map((result,idx)=>{
                return <div><ListItem key={idx}><Typography variant="title">{(result._source && result._source.title) ? result._source.title : ''}</Typography></ListItem><ListItem key={idx+'desc'}><Typography  paragraph={true}>{(result._source && result._source.description) ? result._source.description : ''}</Typography></ListItem></div>
            })
        } 
                  
        return (
                <Grid container alignItems="stretch" justify="center" style={style}>
                    <Grid item md={3} className="sidebar">
                        this is sidebar
                    </Grid>
                    <Grid item md={9}>
                    <Typography variant="headline" gutterBottom align="left" className={'searchHeading'}>
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
