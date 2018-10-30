import React, {Component} from 'react';
import {Paper, Grid, Button, FormControl, Input, InputLabel, Typography} from '@material-ui/core';
import './signup.css';
import HTTP from '../../services/http';
import '../../App.css';

export default class UserSignup extends Component{

    constructor(props){
        super();
        this.state= {
            email : '',
            password: '',
            cpassword : '',
            error: false,
            success: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(name, event){        
        this.setState({
            [name] : (event && event.target && event.target.value) ? event.target.value :''
        })
    }

    handleSubmit(event){
        event.preventDefault();
        HTTP.post('user/signup', {email: this.state.email, password: this.state.password})
        .then((isLogin)=>{
            if(isLogin && isLogin.data && isLogin.data._id) {
                localStorage.setItem('LOGGEDIN_USER', JSON.stringify({_id : isLogin.data._id, email : isLogin.data.email, first_name: isLogin.data.first_name, last_name: isLogin.data.last_name}));
                this.props.history.push('/');
            }
        })
        .catch((error)=> {
            this.setState({error: "Error in user signup"})
        });
    }

    render(){
        return (
            <div>
                <Grid container style={style} direction="column" alignItems="center" >
                    <Paper className="paper">   
                    <Grid item>                   
                        <Typography variant="headline">Signup</Typography>
                    </Grid>
                    <Grid item>                        
                    <form onSubmit={this.handleSubmit}>
                        <Typography variant="subheading" gutterBottom color="error">
                            {this.state.error}
                        </Typography>
                        <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input id="email" name="email" autoComplete="email" autoFocus value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel> 
                        <Input
                            name="password"
                            type="password"
                            autoComplete="false" value={this.state.password}  onChange={this.handleChange.bind(this, 'password')}
                        />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Confirm Password</InputLabel> 
                        <Input
                            name="cpassword"
                            type="password"
                            autoComplete="cpassword" value={this.state.cpassword}  onChange={this.handleChange.bind(this, 'cpassword')}
                        />
                        { (this.state.password !=  this.state.cpassword) ? 
                                <span className={'err-text'}>
                                    Password mismatch
                                </span>
                            : ''
                        }                        
                        </FormControl>                        
                        <Button type="submit" fullWidth variant="raised" color="primary"> Signup </Button>
                    </form>                        
                    </Grid>
                    </Paper>
                </Grid>
            </div>
        )
    }
}

const style = {
    'paddingTop' : '10px',
    'minHeight': (window.innerHeight - 80)
}