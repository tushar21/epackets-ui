import React, {Component} from 'react';
import SearchBar from '../search';
import {Link} from 'react-router-dom';


export default class Home extends Component{

    render(){
        return (
            <div>
                <SearchBar/>
                <Link to="/about">About</Link>
            </div>

        )
    }

    
}