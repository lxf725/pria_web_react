import React, { Component } from 'react'
import RefreshIndicator from 'material-ui/RefreshIndicator';
import { connect } from 'react-redux'

const style = {
  	container: {
    	position: 'fixed',
    	width: '100%',
    	height: '100%',
    	zIndex: '999',
    	backgroundColor: 'rgba(0,0,0,0.1)'
  	},
  	refresh: {
    	display: 'inline-block',
    	position: 'absolute',
    	top: '50%',
    	left: '48%',
    	transform: 'translate(-50%, -50%)'
  	},
};


class Loading extends Component{
	render(){
		var show = this.props.isLoading ? (
			<div style={style.container}>
			    <RefreshIndicator
			      size={40}
			      left={0}
			      top={0}
			      status="loading"
			      style={style.refresh}
			    />
		  	</div>
		) : <span />

		return show
	}
}

const mapStateToProps = (state) => ({
	isLoading: state.isLoading
})

export default connect (mapStateToProps)(Loading)