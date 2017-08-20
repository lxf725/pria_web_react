import React, { Component } from 'react';
import ReactTable from 'react-table'

var UserManage = React.createClass({
    getInitialState(){
        return {
            resourceData: []
        };
    },
    componentWillMount() {
    },
    render() {
        const columns = [{
            Header: '姓名',
            accessor: 'name'
        },{
            Header: '年龄',
            accessor: 'age'
        },{
            Header: '朋友',
            accessor: 'friendName'
        },{
            Header: '朋友年龄',
            accessor: 'friendAge'
        },{
            Header: '操作',
            accessor: 'options',
            Cell:  () => <div className="pria-table-btn"><button className="btn btn-sm">编辑</button><button className="btn btn-sm">删除</button></div>,
            getTrGroupProps: (state, rowInfo, column, instance) => {
                return {
                    style: {
                        backgroundColor: rowInfo != undefined && rowInfo.index % 2 === 1 ? 'green' : 'red'
                    }
                }
            }
        }];
        return (
            <div className="pria-wrapper">
                <h5>用户列表</h5>
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
                        this.setState({loading: true});
                        fetch('http://59.110.240.155:3000/userManage', {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                            }
                        })
                        .then((response) => response.json())
                        .then((responseJson) => {
                            this.setState({
                                resourceData: responseJson
                            })
                        })
                        .catch((error) => {
                            console.error(error);
                        });

                        /*Axios.get('http://59.110.240.155:8080/userData.json', {
                            page: state.page,
                            pageSize: state.pageSize,
                            sorted: state.sorted,
                            filtered: state.filtered
                        })
                        .then((res) => {
                            this.setState({
                                data: res.data.rows,
                                pages: res.data.pages,
                                loading: false
                            })
                        })*/
                    }}
                />
            </div>
        )
    }
});
export default UserManage;
