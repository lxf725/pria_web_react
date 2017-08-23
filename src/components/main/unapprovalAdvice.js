import React from 'react';
import ReactTable from 'react-table'

var UnapprovalAdvice = React.createClass({
    getInitialState(){
        return {

        }
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
            Header: '产品编号',
            accessor: 'pbProductCode'
        },{
            Header: '产品名称',
            accessor: 'pbProductName'
        },{
            Header: '投资建议类别',
            accessor: 'fOperaType'
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
                        <input type="text" />
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

export default UnapprovalAdvice;



