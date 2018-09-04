import React, {Component} from 'react';
import {TextField} from '@material-ui/core';

export default class SearchBar extends Component{

    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR'
    };

    handleChange = name => event => {
        console.log("Search text changed");
        this.setState({
            [name]: event.target.value,
        });
    };
    
    render(){
        return (<div>
            <TextField
            id="name"
            label="Name"            
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            />
            </div>
        )
    }
}