import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button, Menu, MenuItem, Avatar, Grid} from '@material-ui/core';

const style = {
    purpleAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: '#9932CC',
    }
}

export default class HeaderLogin extends Component {   

    constructor(props){
        super(props);     
        console.log(this.props, "props in header login js ")   
        this.state = {
            anchorEl: null,
            shortName : props.user.first_name[0] + props.user.last_name[0]
        };  
        
        this.doLogout = this.doLogout.bind(this);
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    doLogout(){
        console.log(this.props.history, "this.props.history in dologout");
        localStorage.removeItem('LOGGEDIN_USER');
        this.props.history.push('/');
    }

    render() {
        const { anchorEl, shortName } = this.state;
        return (
            <div>
                <Avatar style={style.purpleAvatar}>
                    <Button
                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick} style={{color: '#FFFFFF'}}
                    >
                    {shortName}
                    </Button>
                </Avatar>
                <Menu id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                    >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem onClick={this.doLogout}>Logout</MenuItem>
                </Menu>
            </div>
        )
    }
}