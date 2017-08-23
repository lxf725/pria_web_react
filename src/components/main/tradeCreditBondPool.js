import React from 'react';
import ReactTable from 'react-table'

var CreditBondPool = React.createClass({
    getInitialState(){
        return {

        }
    },
    onSearch() {
        console.log('按钮点击触发');
    },
    render() {
        const columns = [{
            Header: '发行人',
            accessor: 'pbIssuer'
        },{
            Header: '发行人简称',
            accessor: 'pbIssuerAbbrev'
        },{
            Header: '最新主题评级',
            accessor: 'pbSubjectrating'
        },{
            Header: '最新评级展望',
            accessor: 'pbRatingoutlook'
        },{
            Header: '评级公司',
            accessor: 'pbRatingInst'
        },{
            Header: '公司属性',
            accessor: 'pbCompanyAttr'
        },{
            Header: '信用分析报告',
            accessor: 'pbAlloccredCredreport'
        },{
            Header: '备注',
            accessor: 'pbAlloccredCredreport'
        },{
            Header: '操作',
            accessor: 'options',
            Cell:  () => <div className="pria-table-btn"><button className="pria-btn pria-btn-small">编辑</button><button className="pria-btn pria-btn-small">删除</button></div>
        }];
        return (
            <div>
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

export default CreditBondPool;



