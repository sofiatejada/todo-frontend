import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Todos from './Todos';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import React, { Component } from 'react'
import Header from './Header';

export default class App extends Component {

  state = {
    token: localStorage.getItem('TOKEN')
  }

  login = (userToken) => {
    this.setState({ token: userToken })
    localStorage.setItem('TOKEN', userToken)
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/todos" component={Todos} />
          </Switch>
        </div>
      </Router>
    )
  }
}
