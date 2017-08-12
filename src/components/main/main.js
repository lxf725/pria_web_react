import React, { Component } from 'react';
import logo from '../../logo.svg';
import { connect } from 'react-redux'
import { setHistory } from '../../redux/action'
import '../../style/main.css';

class Main extends Component {
    componentDidMount(){
        this.props.setHistory(this.props.history)
    }

    render() {
        return (
            <div>
                {/*<div className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p className="neco33">
                  娘口三三
                </p>
                <p>
                    Hello World
                </p>
                <p onClick={()=>{this.props.history.push("/about")}}>About</p>*/}
                <div>主页默认页面</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    _history: state._history
})

const mapDispatchToProps = (dispatch) => ({
    setHistory: (_history) => {
        dispatch(setHistory(_history))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)


