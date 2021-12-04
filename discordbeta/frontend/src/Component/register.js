import React, { Component } from 'react';
import axios from 'axios';
import logo from "../photo/png/logo.png";

export default class Register extends React.Component {
    state = {
      username: '',
      password: '',
      email: '',
    }
  
    handleChange1 = event => {
      this.setState({ username: event.target.value });
    }
    handleChange2 = event => {
        this.setState({ password: event.target.value });
      }
      handleChange3 = event => {
        this.setState({ email: event.target.value });
      }
    handleSubmit = event => {
      event.preventDefault();
  
      const user = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      };
  
    let response = fetch('http://127.0.0.1:8000/auth/users/',{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
            },
        body: JSON.stringify(user),
    })
    }
  render() {
    return (
        <div className = "body">
        <div className = "registerimtem">
        <img src = {logo} className = "logopng"/>
        <div>
        <form className="registetr" onSubmit={this.handleSubmit}>
         <p className = "email">Email  </p>
         <input className = "regiserinput1" onChange={this.handleChange3} name="email" placeholder = "Email"/>
         <p className = "Name">Name</p>
         <input  className = "regiserinput2" onChange={this.handleChange1} name="name"  placeholder = "Name"/>
         <p className = "pasword1">Pasword</p>
         <input className = "regiserinput3" onChange={this.handleChange2} name="password"  placeholder = "pasword"/>
         <p className = "pasword2">Reaet pasword</p>
          <input className = "regiserinput4" onChange={this.handleChange2}   placeholder = "repeat"/>
         <button type = "submit"  path="/component/login"  className = "registorbtn">
           <p className = "textbtnregist">Next</p>
         </button>
        </form>
      </div>
    </div>

    </div>
    )
  }
}