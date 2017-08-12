import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Provider } from 'react-redux';
import store from './redux/store';
import { setNavList }  from './redux/action'
import Routes from './router/Routers'
import TopBar from './components/commont/topBar'
import SideBar from './components/commont/sideBar'
import Loading from './components/commont/loading'
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
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

class App extends Component {

    /*material-ui 需要配置主题才可以使用*/
    getChildContext() {
        return { muiTheme: getMuiTheme(lightBaseTheme) };
    }

    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <TopBar />
                    <SideBar />
                    <div className="main">
                        <Loading />
                        <Routes />          
                    </div>
                </div>        
            </Provider>
        );
    }
}

App.childContextTypes = {
    muiTheme: PropTypes.object.isRequired
};

export default App;
