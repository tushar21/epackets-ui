import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const style= {
    button: {
        backgroundColor: '#2196f3',

    }
}
export default (props)=>{
    return (
        <div>
            <Link to="/login" className={'headerLinks'}>
                <Button variant="contained" color="primary" style={style.button}>
                    Login
                </Button>
            </Link>
            &nbsp;
            <Link to="/signup" className={'headerLinks'}>
                <Button variant="contained" color="primary" style={style.button}>
                    Signup
                </Button>
            </Link>
        </div>
    )
}