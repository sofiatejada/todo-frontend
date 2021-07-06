import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {

    logout = () => {
        this.setState({ token: '', email: '', password: '' })
        localStorage.setItem('TOKEN', '')
        window.location.href='/'
      }

    render() {
        return (
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Signup</NavLink>
                <NavLink to="/todos">Todos</NavLink>
                <button onClick={this.logout}>
                    Logout
                </button>
            </div>
        )
    }
}
