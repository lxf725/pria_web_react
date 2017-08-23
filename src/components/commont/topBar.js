'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './nav';
import '../../style/topBar.css';
import logo from '../../images/logo.png'


class TopBar extends Component {
	render() {
		return(
			<div className='TopBar'>
				<div className="logo"><img src={logo} alt="pria logo"/></div>
				<Nav {...this.props} />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	navList: state.navList
});

export default connect (mapStateToProps)(TopBar)