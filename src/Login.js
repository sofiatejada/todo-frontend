import React, { Component } from 'react';
import { login } from './utils';

export default class Login extends Component {

    state = {
        email: '',
        password: '',
    }




    render() {
        return (
            <div>
                <form>
                    <label>
                        Email
                        <input type="email" />
                    </label>
                    <label>
                        Password
                        <input type="password" />
                    </label>
                    <button>
                        Login
                    </button>
                </form>
            </div>
        )
    }
}
