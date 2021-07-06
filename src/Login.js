import React, { Component } from 'react';
import { login } from './utils';

export default class Login extends Component {

    state = {
        email: '',
        password: '',
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const token = await login(this.state.email, this.state.password);

        this.props.login(token)

        this.props.history.push('/todos')
    }

    handleEmailChange = async (e) => {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange = async (e) => {
        this.setState({ password: e.target.value });
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email
                        <input onChange={this.handleEmailChange} type="email" />
                    </label>
                    <label>
                        Password
                        <input onChange={this.handlePasswordChange} type="password" />
                    </label>
                    <button>
                        Login
                    </button>
                </form>
            </div>
        )
    }
}
