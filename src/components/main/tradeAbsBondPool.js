import React from 'react';
import ReactTable from 'react-table'

var AbsBondPool = React.createClass({
    getInitialState(){
        return {

        }
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
                <div className="pria-search">
                    <div className="pria-filter">
                        <label>债券简称</label>
                        <input type="text" />
                    </div>
                    <div className="pria-filter">
                        <label>原始权益人</label>
                        <input type="text" />
                    </div>
                    <div className="pria-filter">
                        <label>债项评级</label>
                        <select>
                            <option>请选择</option>
                        </select>
                    </div>
                    <button className="btn btn-info pria-btn-small">查询</button>
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

export default AbsBondPool;



