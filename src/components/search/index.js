import React, {Component} from 'react';
import {Grid, List, ListItem, Typography, Select, MenuItem, Divider} from '@material-ui/core';
import {DecodeQuery} from '../../utils/helper';
import './search.css';
import Elastic from '../../services/elasticsearch';
import SearchSidebar from '../search/sidebar';
import Pagination from '../layout/pagination';
import Header from '../../components/layout/header';
import Footer from '../../components/layout/footer';
const style = {
    minHeight: window.innerHeight    
}

export default class SearchPage extends Component{

    constructor(props){
        super();
        
        let decodedQry = DecodeQuery(props.location.search);

        this.state = {
            sortBy: 'latest',
            searchConfig : decodedQry,
            result : [], 
            total : 0,
            page : decodedQry.page || 1
        }

        Elastic.count(this.state.searchConfig).then((count)=>{            
            this.state.total = count.data.count;
            Elastic.search(this.state.searchConfig)
                .then((data)=>{
                let foundCases = data.data;
                if(foundCases.hits && foundCases.hits.hits && foundCases.hits.hits.length){
                    this.setState({result : foundCases.hits.hits, total: foundCases.hits.total});
                }
            });
        })       

        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleYearFilterChange = this.handleYearFilterChange.bind(this);
        this.onChangePage = this.onChangePage.bind(this);        
    }

    handleYearFilterChange(startYear, endYear){
        console.log(startYear, "startYear");
        console.log(endYear, "endYear");
    }

    handleFilterChange(e, filterKey= null){
        console.log(e.target.value, "e value");
        this.setState({
            searchConfig: {
                ...this.state.searchConfig,
                [filterKey] : e.target.value
            }
        },()=>{
            Elastic.count(this.state.searchConfig).then((count)=>{            
                this.state.total = count.data.count;
                Elastic.search(this.state.searchConfig)
                .then((data)=>{
                    let foundCases = data.data;
                    if(foundCases.hits && foundCases.hits.hits && foundCases.hits.hits.length){
                        this.setState({result : foundCases.hits.hits, total: foundCases.hits.total});
                    }
                    else{
                        this.setState({result : []})
                    }
                })
            })
        })
    }

    caseDetails(e, caseId){
        let qryStr = "/case/"+caseId;
        this.props.history.push(qryStr);
        //console.log(caseId, "caseId");
    }

    paginate(type, event){
        if(type =='sort'){  
            let sortMapping = {
                latest: {
                    sortBy : 'date',
                    order: 'desc'
                },
                oldest: {
                    sortBy : 'date',
                    order: 'asc'
                }
            }
            this.setState({sortBy:event.target.value});
            this.setState({searchConfig: {
                ...this.state.searchConfig,
                ...sortMapping[event.target.value]
            }});

            Elastic.count(this.state.searchConfig).then((count)=>{            
                this.state.total = count.data.count;            
                Elastic.search(this.state.searchConfig)
                .then((data)=>{
                    let foundCases = data.data;
                    if(foundCases.hits && foundCases.hits.hits && foundCases.hits.hits.length){
                        this.setState({result : foundCases.hits.hits, total: foundCases.hits.total});
                    }
                })
            })
        }
    }
   
    onChangePage(event, page){
        this.setState({
            'page' : page
        }, ()=>{
            Elastic.search({
                ...this.state.searchConfig,
                page: page
            })
            .then((data)=>{
                console.log(data, "Pagination data");
                let foundCases = data.data;
                if(foundCases.hits && foundCases.hits.hits && foundCases.hits.hits.length){
                    this.setState({result : foundCases.hits.hits, total: foundCases.hits.total});
                }
            })            
        })
    }

    render(){
        let ResultList = "No results found";

        if(this.state.result && this.state.result.length){
            ResultList = this.state.result.map((result,idx)=>{
                let caseDetailsText = (result._source && result._source.description) ? result._source.description : '';
                return <div className="caseResultDetail"><ListItem key={idx} className="caseTitle" ><Typography variant="title" className='listTitle'  onClick={(e)=>this.caseDetails(e, result._id)}>{(result._source && result._source.title) ? result._source.title : ''}</Typography></ListItem><ListItem key={idx+'desc'} className="caseDesc" ><Typography className={'caseExcerpt'} dangerouslySetInnerHTML={{__html: caseDetailsText}} /></ListItem></div>
            })
        }        

        return (<div><Header/>
            <Grid container alignItems="stretch" justify="center" style={style}>
                <SearchSidebar searchConfig={this.state.searchConfig} history={this.props.history} handleFilterChange={this.handleFilterChange} handleYearFilterChange={this.handleYearFilterChange}/>
                <Grid item md={9} style={{paddingLeft: 10, paddingRight: 10}}>
                    <Grid container style={{marginTop:20}}>
                        <Grid item md={9}>
                            <Typography variant="headline" gutterBottom align="left" className={'searchHeading'}>
                                {this.state.total} total cases found
                            </Typography>
                        </Grid>
                        <Grid item md={3}>
                            <Select
                                value={this.state.sortBy || 'latest'}
                                onChange={(e)=>this.paginate('sort', e)}>
                                <MenuItem value={'latest'}>Latest</MenuItem>
                                <MenuItem value={'oldest'}>Oldest</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                    <List>
                        {ResultList}
                        <Pagination onChangePage={this.onChangePage} count={this.state.total} page={this.state.page} rowsPerPage={1}/>
                    </List>
                </Grid>
            </Grid>
            <Footer/>
            </div>
        )
    }
}