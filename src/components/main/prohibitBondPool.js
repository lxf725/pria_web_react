import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProhibitBondPool extends Component {
    render() {
        return (
            <div>
                禁止池页面
                <Link to="/">main</Link>
            </div>
        )
    }
}


