import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { defaultRanges, Calendar, DateRange }  from 'react-date-range'
import ReactTable from 'react-table'


var AllocationBondPool = React.createClass({
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
            Header: '债券代码',
            accessor: 'pbBondcode'
        },{
            Header: '债券简称',
            accessor: 'pbBondNameShort'
        },{
            Header: '原始权益人',
            accessor: 'pbOriginalHolder'
        },{
            Header: '债项评级',
            accessor: 'pbBondrating'
        },{
            Header: '最新评级展望',
            accessor: 'pbRatingoutlook'
        },{
            Header: '评级公司',
            accessor: 'pbRatingInst'
        },{
            Header: '剩余期限',
            accessor: 'pbYear2maturity'
        },{
            Header: '发行规模',
            accessor: 'pbIssuescale'
        },{
            Header: '债券类型',
            accessor: 'pbBondType'
        },{
            Header: '票面利率',
            accessor: 'pbCoupon'
        },{
            Header: '操作',
            accessor: 'options',
            Cell:  () => <div className="pria-table-btn"><button className="pria-btn pria-btn-small">编辑</button><button className="pria-btn pria-btn-small">删除</button></div>
        }];
        return (
            <div>
                <h5>配置池页面</h5>
                <div className="pria-search">
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
                    <button className="pria-btn pria-btn-small">查询</button>
                </div>

                <div className="pria-table-wrapper">
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
                </div>
            </div>
        )
    }
});

export default  AllocationBondPool;



