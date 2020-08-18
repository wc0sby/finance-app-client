import React, {Component} from 'react';
import {Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';

import Nav from './components/nav'
import Home from './components/home'
import Auth from './components/auth'
import PrivateRoute from './helpers/routes/privateRouter'
import PublicRoute from './helpers/routes/publicRouter'
import Table from './components/table'
import {getUserData, decodeToken} from './helpers/actions/getUserData'

export default class App extends Component{
  state = {
    userInfo: {
      _id:'',
      name:'',
      email:'',
      token:''
    },
  }

  async componentDidMount(){
    const token = document.cookie
    if (document.cookie){
      const tokenData = decodeToken(token)
      let categories = await getUserData(tokenData._id, 'categories')
      // Need to think more into storing the token in state since it's in cookies...seems redundant.
      this.setState({userInfo:{...tokenData, token, categories:categories}})
    }
  }

  render(){
    return (
      <Router>
        <div className={classNames}>
          <Nav auth={this.state.token}/>
          <Switch>
            {/* PrivateRoutes are only accessible by authenticated users */}
            {/* PublicRoutes are accessible to all and can be restricted as needed*/}
            {/* Credit: https://medium.com/@thanhbinh.tran93/private-route-public-route-and-restricted-route-with-react-router-d50b27c15f5e */}
            <PrivateRoute component={Table} exact path="/dashboard" user={this.state.userInfo}/>
            <PublicRoute component={Auth} exact path="/signin" newUser={false} restricted={true}/>
            <PublicRoute component={Auth} exact path="/register" newUser={true} restricted={true}/>
            <PublicRoute component={Home} exact path="/" restricted={false}/>
            {/* If an invalid route is hit, then we will return a message page with link back home. TODO: Create a new component to handle */}
            <Route path="*">
              <div>
                <h3>Sorry - invalid link</h3>
                <Link to="/">Return Home?</Link>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const classNames = 'app-body full-height-grow'