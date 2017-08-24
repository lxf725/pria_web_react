import React from 'react';

var LoginForm = React.createClass({
    getInitialState () {
        return {
            username: '',
            password: '',
        };
    },
    handleChange (e) {
        var newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    },
    handleClick () {

    },
    onSubmit (e) {
        e.preventDefault();
        var data = {
            username : this.state.username,
            password : this.state.password,
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
    },
    render() {
        return (
            <div className="loginForm">
                <form action="" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>账户</label>
                        <input type="text" value={this.state.username} placeholder="请输入账户名" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>密码</label>
                        <input type="password" value={this.state.password} placeholder="请输入密码" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <buttom className="btn btn-danger">确定</buttom>
                    </div>
                </form>
            </div>
        );
    }
});

export default LoginForm;