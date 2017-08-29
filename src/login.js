import React from 'react';
import {withRouter} from 'react-router';
import auth from './components/commont/auth.js';
import './style/bootstrap.css'

const Login = React.createClass({
    getInitialState() {
        return {
            error: false,
            username: '',
            password: '',
        }
    },
    // handleChange() {
    //     this.setState({
    //         username: this.state.username,
    //         password: this.state.password
    // }),

    handleSubmit(event) {
        event.preventDefault();

        const email = this.refs.email.value;
        const pass = this.refs.pass.value;
        var data = {
            username : this.state.username,
            password : this.state.password
        };
        fetch('http://59.110.240.155:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                resourceData: responseJson
            })
        })
        .catch((error) => {
            console.error(error);
        });

        auth.login(email, pass, (loggedIn) => {
            if (!loggedIn) return this.setState({error: true});

            const {location} = this.props;

            /*if (location.state && location.state.nextPathname) {
                this.props.router.replace(location.state.nextPathname)
            } else {
                this.props.router.replace('/')
            }*/
        })
    },

    render() {
        return (
            <div className="loginForm">
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="">账户</label>
                        <input type="text" className="form-control" defaultValue={this.state.username} placeholder="请输入账户名"
                               onChange={this.handleChange} />
                    </div>
                    <br/>
                    <div className="form-group">
                        <label className="">密码</label>
                        <input type="password" className="form-control" defaultValue={this.state.password} placeholder="请输入密码"
                               onChange={this.handleChange} />
                    </div>
                    <br/>
                    <div className="form-group">
                        <buttom className="btn btn-danger" onClick={this.onSubmit}>确定</buttom>
                        {this.state.error && (
                            <p>登录失败，请检查您的用户名或者密码！</p>
                        )}
                    </div>
                </form>
            </div>
        )
    }

});

export default Login;
