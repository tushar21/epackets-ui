import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default (props)=>{
    return (
        <div>
            <Link to="/login">
                <Button variant="contained" color="primary">
                    Login
                </Button>
            </Link>
            &nbsp;
            <Link to="/login">
                <Button variant="contained" color="primary">
                    Signup
                </Button>
            </Link>
        </div>
    )
}