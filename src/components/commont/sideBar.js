import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../style/sideBar.css'

class SideBar extends Component {
	handleClick(className){
		let tags = document.getElementsByClassName('third-menu-item');
		for(let i = 0, len = tags.length; i < len;i++){
			removeClass(tags[i], 'is-active')
		}
		addClass(document.getElementsByClassName(className)[0], 'is-active')

		console.log(this.props._history)

		this.props._history&&this.props._history.push(className)
	}


	render() {
		var menu = this.props.subMenu
		var tag = menu.map((item, index1)=>{
			var tag2 = item.sub_list.map((elem, index2)=>(
				<div className={'third-menu-item ' + elem.id}  key={index2} onClick={()=>{this.handleClick(elem.id)}}>{elem.name}</div>
			))
			return (
				<div className='sub-menu-item' key={index1}>
					<div className='item-title'>{item.title}</div>
					{tag2}
				</div>
			)
		})
		return(
			<div className="SideBar">{tag}</div>
		)
	}
}

function hasClass(elem, cls) {
  cls = cls || '';
  if (cls.replace(/\s/g, '').length === 0) return false; //当cls没有参数时，返回false
  return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
}

function addClass(elem, cls) {
  if (!hasClass(elem, cls)) {
    elem.className = elem.className === '' ? cls : elem.className + ' ' + cls;
  }
}

function removeClass(elem, cls) {
  if (hasClass(elem, cls)) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' ';
    while (newClass.indexOf(' ' + cls + ' ') >= 0) {
      newClass = newClass.replace(' ' + cls + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
}

const mapStateToProps = (state) => ({
	subMenu: state.subMenu,
	_history: state._history
})

export default connect(mapStateToProps)(SideBar);

