import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import Home from '../components/home';
import AboutUs from '../components/about';
import Login from '../components/login';
import UserSignup from '../components/signup';

export default ()=>{
    return (
        <Router>
            <div style={style}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={AboutUs} />
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={UserSignup}/>
            </div>
        </Router>        
    )
}


const style = {
    padding: '10px'
}