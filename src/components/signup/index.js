import React, {Component} from 'react';
import {Paper, Grid, Button, FormControl, Input, InputLabel, Typography, Snackbar} from '@material-ui/core';
import './signup.css';
import HTTP from '../../services/http';
import '../../App.css';

export default class UserSignup extends Component{

    constructor(props){
        super();
        this.state= {
            form:{
                email : '',
                password: '',                
                first_name: '',
                last_name : '',
            },
            cpassword : '',
            error: false,
            success: false,
            opensnack: false,
            snackmessage : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showSnack = this.showSnack.bind(this);
    }

    handleChange(name, event){        
        this.setState({
            [name] : (event && event.target && event.target.value) ? event.target.value :''
        })
    }

    handleFormChange(name, event){        
        this.setState({form: {
            ...this.state.form,
            [name] : (event && event.target && event.target.value) ? event.target.value :''
        }})
    }

    handleSubmit(event){
        event.preventDefault();
        let user = {

        }
        HTTP.post('user/signup', this.state.form)
        .then((isLogin)=>{
            if(isLogin && isLogin.data && isLogin.data._id) {
                /* localStorage.setItem('LOGGEDIN_USER', JSON.stringify({_id : isLogin.data._id, email : isLogin.data.email, first_name: isLogin.data.first_name, last_name: isLogin.data.last_name})); */
                //this.props.history.push('/');
                
                this.showSnack("User signup successfully. You can login after admin approve your account");
            }
        })
        .catch((error)=> {
            //this.setState({error: "Error in user signup"});
            this.showSnack("Error in user signup");
        });
    }

    showSnack(msg=''){
        this.setState({ opensnack: true, snackmessage: msg });
    }

    render(){
        return (
            <div>                
                <Grid container style={style} direction="column" alignItems="center" >
                <Snackbar
                    anchorOrigin={{ 'vertical':'top', 'horizontal': 'right' }}
                    open={this.state.opensnack}
                    ContentProps={{
                        'aria-describedby': 'message-id'
                    }}
                    message={this.state.snackmessage}
                    />
                    <Paper className="paper">   
                    <Grid item>                   
                        <Typography variant="headline">Signup</Typography>
                    </Grid>
                    <Grid item>        
                    <form onSubmit={this.handleSubmit}>
                        {/* <Typography variant="subheading" gutterBottom color="error">
                            {this.state.error}
                        </Typography> */}
                        <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input id="email" name="email" autoComplete="email" autoFocus value={this.state.form.email} onChange={this.handleFormChange.bind(this, 'email')} />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="first_name">First Name</InputLabel> 
                        <Input
                            name="first_name"
                            type="first_name"
                            autoComplete="false" value={this.state.form.first_name}  onChange={this.handleFormChange.bind(this, 'first_name')}
                        />
                        </FormControl>

                        <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="last_name">Last Name</InputLabel> 
                        <Input
                            name="last_name"
                            type="last_name"
                            autoComplete="false" value={this.state.form.last_name}  onChange={this.handleFormChange.bind(this, 'last_name')}
                        />
                        </FormControl>

                        <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel> 
                        <Input
                            name="password"
                            type="password"
                            autoComplete="false" value={this.state.form.password}  onChange={this.handleFormChange.bind(this, 'password')}
                        />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Confirm Password</InputLabel> 
                        <Input
                            name="cpassword"
                            type="password"
                            autoComplete="cpassword" value={this.state.cpassword}  onChange={this.handleChange.bind(this, 'cpassword')}
                        />
                        { (this.state.form.password !=  this.state.cpassword) ? 
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