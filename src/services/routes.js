import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import Home from '../components/home';
import AboutUs from '../components/about';
import Login from '../components/login';
import UserSignup from '../components/signup';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

export default ()=>{
    return (
        <Router>
            <div>
            <Header/>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={AboutUs} />
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={UserSignup}/>
            <Footer/>
            </div>
        </Router>
    )
}