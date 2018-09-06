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
        super();
        this.state = {
            anchorEl: null,
        };
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;

        return (
            <div>
                <Avatar style={style.purpleAvatar}>
                    <Button
                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick} style={{color: '#FFFFFF'}}
                    >
                    {this.props.user.first_name[0] + this.props.user.last_name[0]}
                    </Button>
                </Avatar>
                <Menu id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                    >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu>
            </div>
        )
    }
}