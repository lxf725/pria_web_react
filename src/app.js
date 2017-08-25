import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Provider } from 'react-redux';
import store from './redux/store';
import { setNavList }  from './redux/action';
import Routes from './router/Routers';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopBar from './components/commont/topBar';
import SideBar from './components/commont/sideBar';
import Loading from './components/commont/loading';
import Footer from './components/commont/footer';
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Login from './login';
import auth from './components/commont/auth';
import './style/app.css';

const navList = [{
        /*name: '会员中心',
        icon: 'fa-diamond',*/
        children: [{
            title: '系统管理',
            sub_list: [{
                name: '用户管理',
                id: 'userManage'
            },{
                name: '角色管理',
                id: 'roleManage'
            }]
        },{
            title: '产品管理',
            sub_list: [{
                name: '产品列表',
                id: 'productManage'
            }]
        },{
            title: '债券池管理',
            sub_list: [{
                name: '禁止池',
                id: 'prohibitBondPool'
            },{
                name: '交易池',
                id: 'tradeBondPool'
            },{
                name: '配置池',
                id: 'allocationBondPool'
            },{
                name: '债券池审批',
                id: 'approvalBondPool'
            }]
        },{
            title: '投资建议审批',
            sub_list: [{
                name: '投资建议录入',
                id: 'entryAdvice'
            },{
                name: '投资建议审批',
                id: 'approvalAdvice'
            },{
                name: '投资建议列表',
                id: 'queryAdvice'
            }]
        }],
        index: 0
    }]

store.dispatch(setNavList(navList));

function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}
class App extends Component {
    /*material-ui 需要配置主题才可以使用*/
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: auth.loggedIn()
        };
        console.log('-+--+++++++++++++++++++++------------------');
        console.log(store);
        //this.updateAuth = this.updateAuth.bind(this)
    }
    /*updateAuth(loggedIn) {
        this.setState({
            loggedIn: !!loggedIn
        })
    }

    componentWillMount() {
        auth.onChange = this.updateAuth
        auth.login()
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(lightBaseTheme) };
    }*/

    render() {
        return (
            <Provider store={store}>
                { !this.state.loggedIn ? (
                    <div className="Login">
                        <Login />
                    </div>
                ) : (
                    <div className="App">
                        <TopBar />
                        <SideBar />
                        <div className="main">
                            <Loading />
                            <Routes />
                        </div>
                        <Footer />
                    </div>
                )}
            </Provider>
        );
    }
}

App.childContextTypes = {
    muiTheme: PropTypes.object.isRequired
};

export default App;
