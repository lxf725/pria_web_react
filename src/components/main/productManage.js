import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { defaultRanges, Calendar, DateRange }  from 'react-date-range'
import ReactTable from 'react-table'


var ProductManage = React.createClass({
    getInitialState(){
        var value = new Date().toISOString();
        var dayLabels = ['日','一','二','三','四','五','六'];
        var monthLabels = ['01月','02月','03月','04月','05月','06月','07月','08月','09月','10月','11月','12月'];
        var todayButton = false;
        var specialDays = [];
        return {
            value: value,
            dayLabels: dayLabels,
            monthLabels: monthLabels,
            todayButton: todayButton,
            startDate: '10-11-2015 00:00:00',
            endDate: '10-11-2020 00:00:00',
            specialDays: specialDays,
            rangePicker: {},
            linked: {},
            datePicker: null,
            firstDayOfWeek: null,
            predefined: {},
        }
    },
    handleChange (value, formattedValue) {
        this.setState({
            value: value,
            formattedValue: formattedValue
        });
    },
    onSearch() {
        console.log('按钮点击触发');
    },
    handleChange(which, payload) {
        this.setState({
            [which] : payload
        });
    },
    render() {
        const { rangePicker, linked, datePicker, firstDayOfWeek, predefined} = this.state;
        const format = 'MM-DD-YYYY hh:mm:ss';
        const columns = [{
            Header: '产品名称',
            accessor: 'pmProductName',
        },{
            Header: '产品代码',
            accessor: 'pmProductCode',
        },{
            Header: '委托人姓名',
            accessor: 'pmProdConsignername',
        },{
            Header: '管理人姓名',
            accessor: 'pmProdManagerName'
        },{
            Header: '托管人姓名',
            accessor: 'pmProdCustodianname'
        },{
            Header: '成立日',
            accessor: 'pmProdSetupdate'
        },{
            Header: '产品规模',
            accessor: 'pmProdScale'
        },{
            Header: '操作',
            accessor: 'options',
            Cell:  () => <div className="pria-table-btn"><button className="pria-btn pria-btn-small">编辑</button><button className="pria-btn pria-btn-small">删除</button></div>,
            getTrGroupProps: (state, rowInfo, column, instance) => {
            return {
                style: {
                    backgroundColor: rowInfo != undefined && rowInfo.index % 2 === 1 ? 'green' : 'red'
                }
            }
        }
        }];
        return (
            <div>
                <h5>产品列表</h5>
                <div className="pria-search pria-single">
                    <div className="pria-filter">
                        <label>产品名称</label>
                        <select>
                        <option>请选择</option>
                        </select>
                    </div>
                    <div className="pria-filter">
                        <label>产品代码</label>
                        <input type="text" />
                    </div>
                    <div className="pria-filter">
                        <label>产品代码</label>
                        <input type="text" />
                    </div>
                    <button className="btn btn-info pria-btn-small">查询</button>
                </div>

                <div className="pria-table-wrapper pria-single">
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
    
                        }}
                    />
                </div>
                <div className="pria-buttons">
                    <button className="btn btn-danger">新增产品</button>
                </div>

            </div>
        )
    }
});

export default ProductManage;


