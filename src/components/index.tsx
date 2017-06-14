import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

const Routes = () => {
    return (
        <Router>
            <div>
                <div>Hey There</div>
                <Route exact path='/' component={()=>(<div>Home</div>)} />
                <Route path='/me' component={()=>(<div>me</div>)} />
                <Route path='/projects' component={()=>(<div>proj</div>)}/>
            </div>
        </Router>
    )
}

export default Routes;