import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { defaultRanges, Calendar, DateRange }  from 'react-date-range'
import ReactTable from 'react-table'


var ProhibitBondPool = React.createClass({
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
            Header: '产品代码',
            accessor: 'pbProductCode'
        },{
            Header: '产品名称',
            accessor: 'pbProductName'
        },{
            Header: '债券代码',
            accessor: 'pbBondcode'
        },{
            Header: '债券简称',
            accessor: 'pbBondNameShort'
        },{
            Header: '交易市场',
            accessor: 'pbDealMarket'
        },{
            Header: '发行人',
            accessor: 'pbIssuerCname'
        },{
            Header: '最新主题评级',
            accessor: 'pbSubjectrating'
        },{
            Header: '最新债项评级',
            accessor: 'pbBondrating'
        },{
            Header: '最新评级展望',
            accessor: 'pbRatingoutlook'
        },{
            Header: '评级公司',
            accessor: 'pbRatingInst'
        },{
            Header: '票面利率(%)',
            accessor: 'pbCoupon'
        },{
            Header: '剩余期限(年)',
            accessor: 'pbYear2maturity'
        },{
            Header: '发行规模(亿元)',
            accessor: 'pbIssuescale'
        },{
            Header: '债项类型',
            accessor: 'pbBondType'
        },{
            Header: '所属wind行业名称',
            accessor: 'pbIndustryWindname'
        },{
            Header: '操作',
            accessor: 'options',
            Cell:  () => <div className="pria-table-btn"><button className="pria-btn pria-btn-small">编辑</button><button className="pria-btn pria-btn-small">删除</button></div>
        }];
        return (
            <div>
                <h5>禁止池页面</h5>
                <div className="pria-search">
                    <div className="pria-filter">
                        <label>产品名称</label>
                        <select>
                            <option>请选择</option>
                        </select>
                    </div>
                    <div className="pria-filter">
                        <label>发行人</label>
                        <input type="text" />
                    </div>
                    <div className="pria-filter">
                        <label>主体评级</label>
                        <select>
                            <option>请选择</option>
                        </select>
                    </div>
                    <div className="pria-filter">
                        <label>债项评级</label>
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
                            this.setState({loading: true})
                            fetch('http://59.110.240.155:3000/prohibitBondPool', {
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

export default  ProhibitBondPool;



