import React, { Component } from 'react';
import axios from 'axios';

export default class NewUserRegistration extends Component {
    constructor(props){
        super(props);

        this.state = {
            user_name: "",
            password: "",
            department: "1",
            admin: "false"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        axios({
            method: 'post',
            url: "https://lifeboat-safety-tracker-api.herokuapp.com/user/register",
            // url: "http://localhost:5000/user/register",
            data: {
                user_name: this.state.user_name,
                password: this.state.password,
                department: this.state.department,
                admin: this.state.admin === 'true'? true :false
            }
        })
        .then(response => {
            console.log(response)
            })
        
        .then(this.setState({
            user_name: "",
            password: "",
            department: "",
            admin: "false"
        }))
        
        .catch(error => {                    
            console.log("error", error)
        })
        event.preventDefault();
    }

    render() {
        return(
            <div className="registration-container">
                <div>
                    <h1>Please enter new user's data</h1>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit} className="newUser-registration-wrapper">
                        <div className="form-group">
                            <input 
                            className="input-field"
                            type="text"
                            name="user_name"
                            placeholder="Enter a New user name"
                            value={this.state.user_name}
                            onChange={this.handleChange}
                            autoComplete="off"
                            />
                        </div>                    
                        <div className="form-group">
                            <input 
                            className="input-field"
                            type="password"
                            name="password"
                            placeholder="Enter a password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                        <p>Please enter the new user's department.</p>
                            <select className="drop-field" name="department" value={this.state.department} onChange={this.handleChange}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <p>Is the new user an admin?</p>
                            <select className="drop-field" name="admin" value={this.state.admin} onChange={this.handleChange}>
                                <option value="false">No</option>
                                <option value="true">Yes</option>
                            </select>
                        </div>
                        <div className="reg-submit-btn">
                            <button className="form-btn" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}