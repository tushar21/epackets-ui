import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import Home from '../components/home';
import AboutUs from '../components/about';
import Login from '../components/login';
import UserSignup from '../components/signup';
import SearchPage from '../components/search';
import CaseDetails from '../components/casedetails';
import { createBrowserHistory } from 'history'

export default ()=>{    
    return (
        <Router history={createBrowserHistory()}>
            <div>            
                <Route exact path="/" component={Home} />
                <Route path="/about" component={AboutUs} />
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={UserSignup}/>
                <Route path="/search" component={SearchPage}/>
                <Route path="/case/:id" component={CaseDetails}/>            
            </div>
        </Router>
    )
}