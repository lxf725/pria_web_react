import React, { Component } from 'react';
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


