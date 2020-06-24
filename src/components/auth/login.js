import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            user_name: "",
            password: "",
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios({
            method: 'post',
            url: "http://localhost:5000/user/login",
            data: {
                user_name: this.state.user_name,
                password: this.state.password
            }
      
        }).then(response => {
            // User Verified
            console.log(response)
            if (response.data.message === 'User Verified') {
                this.props.handleSuccessfulLogin(response.data.userInfo.user_name)
            }
        }).catch(error => {
            console.log("error", error)
        })
    }

    render() {
        return (
            <div>
                <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                        className="form-field" 
                        type="text"
                        name="user_name"
                        placeholder="User Name"
                        value={this.state.user_name}
                        onChange={this.handleChange}
                        autoComplete="off"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        className="form-field"
                        type="password"
                        name="password"
                        placeholder="Your Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        />
                    </div>
                    <button className="form-btn" type="submit">Login</button>
                </form>
            </div>

        );
    }
}