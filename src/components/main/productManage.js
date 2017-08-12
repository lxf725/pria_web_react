import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductManage extends Component {
    render() {
        return (
            <div>
                产品管理页面---列表
                <Link to="/">main</Link>
            </div>
        )
    }
}


