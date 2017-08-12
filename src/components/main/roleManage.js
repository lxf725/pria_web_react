import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class RoleManage extends Component {
    render() {
        return (
            <div>
                角色管理页面
                <Link to="/">main</Link>
            </div>
        )
    }
}


