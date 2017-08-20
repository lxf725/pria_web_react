import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSubMenu } from '../../redux/action'
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'
import '../../style/bootstrap.css'
import '../../style/custom.css'
import avatar from '../../images/avatar.png'

class Nav extends Component {
	constructor(props){
		super(props);
        this.state = {
            selectIndex: 0,
            showModal: false
        };
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
	}

	componentDidMount() {
		this.props.selectSubMenu(0, this.props.navList)
	}

	handleClick(i){
		const { dispatch } = this.props
		this.setState({selectIndex: i})
		dispatch(selectSubMenu(i, this.props.navList))
	}

    open() {
        this.setState({showModal: true});
    }

    close() {
        this.setState({showModal: false});
    }

	render() {
		var { navList } = this.props;
		var tag = navList.map((item,i)=>(
			<li className={this.state.selectIndex === i ? "el-menu-item is-active" : "el-menu-item"} key={i} onClick={()=>{this.handleClick(i)}}><i className={'fa ' + item.icon}></i> {item.name}</li>
		))

		return(
			<div className="pria-user">
				<p className="avatar"><img src={avatar} onClick={this.open}/></p>
				<Modal className="modal-container"
					   show={this.state.showModal}
					   onHide={this.close}
					   animation={true} >
					<Modal.Header closeButton >
						<Modal.Title>修改个人信息</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						gffgfg
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.close}>Close</Button>
						<Button bsStyle="primary">Save changes</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	navList: state.navList
})

const mapDispatchToProps = (dispatch) => ({
	selectSubMenu: (key, list) => {
		dispatch(selectSubMenu(key, list))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)