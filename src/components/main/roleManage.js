import React, { Component } from 'react';
import ReactTable from 'react-table'
import DatePicker from "react-bootstrap-date-picker"

var RoleManage = React.createClass({
    getInitialState(){
        return {
            resourceData: []
        };
    },
    componentWillMount() {
    },
    render() {
        const columns = [{
            Header: '角色',
            accessor: 'role',
        },{
            Header: '账户名',
            accessor: 'accountName',
        },{
            Header: '机构',
            accessor: 'institution',
        },{
            Header: '操作',
            accessor: 'options',
            Cell:  () => <div className="pria-table-btn"><button className="btn btn-sm">编辑</button><button className="btn btn-sm">删除</button></div>,
        }];
        return (
            <div className="pria-wrapper">
                <h5>角色列表</h5>
                <ReactTable
                    data={this.state.resourceData}
                    pages={3}
                    columns={columns}
                    defaultPageSize={10}
                    previousText='上一页'
                    nextText='下一页'
                    loadingText='加载中'
                    noDataText='暂无数据'
                    pageText='第'
                    ofText='页,共页'
                    rowsText='行'
                    manual
                    onFetchData={( state, instance ) => {
                        this.setState({loading: true})
                        fetch('http://59.110.240.155:3000/roleManage', {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application:/x-www-form-urlencoded:charset=UTF-8'
                            }
                        })
                        .then((response) => {
                            return response.json()
                        })
                        .then((responseJson) => {
                            this.setState({
                                resourceData: responseJson
                            })
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                    }}
                />
                <div className="pria-buttons">
                    <button className="btn btn-danger">新增角色</button>
                </div>
                <DatePicker dateFormat="MM-DD-YY"
                            dayLabels={this.state.dayLabels}
                            monthLabels={this.state.monthLabels}
                            value={this.state.value}
                            onChange={this.handleChange}
                            showTodayButton={this.state.todayButton}
                            todayButtonLabel="今天"/>
            </div>
        )
    }
});
export default RoleManage;


