import React, {Component} from 'react'
import axios from 'axios'
import {axiosWithAuth} from './utils/auth'

class LoginForm extends Component{
    
    state = {
        credentials:{
            username:'',
            password:''
        }
    }

    login = e =>{
        e.preventDefault();
        console.log("this is cred:", this.state.credentials)
        axiosWithAuth().post('/login', this.state.credentials)
        .then(req =>{
            console.log('this is req', req)
            localStorage.setItem('token', req.data.payload)
            this.props.history.push('/protected')
        })
    }

    handleChanges = e =>{
        this.setState({
            credentials:{
                ...this.state.credentials,
                [e.target.name]:e.target.value
            }
            
        })
    }

    render(){
        return(
        <div>
            <form onSubmit={this.login}>
                <input
                type="text"
                name="username"
                value={this.state.credentials.username}
                onChange={this.handleChanges}
                />
                <input
                type="text"
                name="password"
                value={this.state.credentials.password}
                onChange={this.handleChanges}
                />
                <button>Log in</button>
            </form>
        </div>
    )}
}

export default LoginForm