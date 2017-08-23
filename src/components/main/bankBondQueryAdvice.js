import React from 'react';
import ReactTable from 'react-table'

var BankBondQueryAdvice = React.createClass({
    getInitialState(){
        return {

        }
    },
    onSearch() {
        console.log('按钮点击触发');
    },
    render() {
        const columns = [{
            Header: '产品名称',
            accessor: 'pmProductName'
        },{
            Header: '交易日期',
            accessor: 'ibinvDealDate'
        },{
            Header: '清算速度',
            accessor: 'ibinvSetlSpeed'
        },{
            Header: '交易方向',
            accessor: 'ibinvDealdirection'
        },{
            Header: '对手机构',
            accessor: 'ibinvCountpartyInst'
        },{
            Header: '债券代码',
            accessor: 'ibinvBondcode'
        },{
            Header: '债券名称',
            accessor: 'ibinvBondname'
        },{
            Header: '交易面额(万元)',
            accessor: 'ibinvAmount'
        },{
            Header: '交易净价(元)',
            accessor: 'ibinvTradeCleanprice'
        },{
            Header: '交易全价(元)',
            accessor: 'ibinvTradeDirtyprice'
        },{
            Header: '到期收益率(%)',
            accessor: 'ibinvBondYtm'
        },{
            Header: '操作',
            accessor: 'options',
            Cell:  () => <div className="pria-table-btn"><button className="pria-btn pria-btn-small">编辑</button><button className="pria-btn pria-btn-small">删除</button></div>
        }];
        return (
            <div>
                <div className="pria-search">
                    <div className="pria-filter">
                        <label>产品名称</label>
                        <select>
                            <option>请选择</option>
                        </select>
                    </div>
                    <div className="pria-filter">
                        <label>交易时间</label>
                        {/* TODO */}
                        <input type="text" />
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

export default BankBondQueryAdvice;


