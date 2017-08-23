import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { defaultRanges, Calendar, DateRange }  from 'react-date-range'
import ReactTable from 'react-table'


var ApprovalBondPool = React.createClass({
    getInitialState(){
        return {

        }
    },
    handleChange (value, formattedValue) {
        this.setState({

        });
    },
    onSearch() {
        console.log('按钮点击触发');
    },

    render() {
        const columns = [{
            Header: '提交日期',
            accessor: 'fSubmitDate'
        },{
            Header: '提交时间',
            accessor: 'fSubmitTime'
        },{
            Header: '提交人',
            accessor: 'fSubmitter'
        },{
            Header: '债券池类别',
            accessor: 'fBondPoolType'
        },{
            Header: '操作类型',
            accessor: 'fOperaType'
        },{
            Header: '操作',
            accessor: 'options',
            Cell:  () => <div className="pria-table-btn"><button className="pria-btn pria-btn-small">编辑</button><button className="pria-btn pria-btn-small">删除</button></div>
        }];
        return (
            <div>
                <h5>债券池审批页面</h5>
                <div className="pria-search pria-single">
                    <div className="pria-filter">
                        <label>发行人</label>
                        <input type="text" />
                    </div>
                    <div className="pria-filter">
                        <label>最新主体评级</label>
                        <select>
                            <option>请选择</option>
                        </select>
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
                            this.setState({loading: true});
                            fetch('http://59.110.240.155:3000/absBondPool', {
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
                    <div className="pria-buttons">
                        <button className="btn btn-danger">审批</button>
                    </div>
                </div>
            </div>
        )
    }
});

export default  ApprovalBondPool;



