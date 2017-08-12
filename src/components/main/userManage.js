import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table'
import Axios from 'axios'
import '../../style/custom.css'
import '../../style/react-table.css'
import axiosSrc from '../../api/userData.json'


export default class UserManage extends Component {
    getInitialState() {
        return {
            data : [{
                "name": "Linsley",
                "age": 26,
                "friendName": "Jason",
                "friendAge": 21
            }, {
                "name": "Tanner",
                "age": 27,
                "friendName": "Maurer",
                "friendAge": 23
            }]
        };
    }
    render() {
        /*const data = [{
            "name": "Linsley",
            "age": 26,
            "friendName": "Jason",
            "friendAge": 21
        }, {
            "name": "Tanner",
            "age": 27,
            "friendName": "Maurer",
            "friendAge": 23
        }];*/

        const columns = [{
            Header: '姓名',
            accessor: 'name',
        }, {
            Header: '年龄',
            accessor: 'age',
            //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        }, {
            id: 'friendName',
            Header: '朋友',
            accessor: 'friendName',
        }, {
            Header: '朋友年龄',
            accessor: 'friendAge',
            getTrProps:(state, rowInfo, column) => {
                return {
                    // style: {
                    //     backgroundColor: rowInfo != undefined && rowInfo.row.age > 20 ? 'green' : 'red'
                    // }
                }
            },
        },{
            Header: '操作',
            accessor: 'options',
            Cell:  () => <div className="pria-table-btn"><button className="btn btn-sm">编辑</button><button className="btn btn-sm">删除</button></div>,
            getTrGroupProps: (state, rowInfo, column, instance) => {
                return {
                    style: {
                        backgroundColor: rowInfo != undefined && rowInfo.index % 2 == 1 ? 'green' : 'red'
                    }
                }
            }
        }];
        return (
            <div className="pria-wrapper">
                <h5>用户管理列表</h5>
                <ReactTable
                    data={this.state.data}
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
                    /*onPageChange={(pageIndex) => {console.log('页改变触发的函数');}}
                    onPageSizeChange={(pageSize, pageIndex) => {console.log('当前页数改变触发的函数');}}
                    onSortedChange={(newSorted, column, shiftKey) => {console.log('排序改变触发的函数')}}
                    onExpandedChange={(newExpanded, index, event) => {console.log('expanded改变触发的函数')}}
                    onFilteredChange={(column, value) => {console.log('filter改变触发的函数')}}
                    onResizedChange={(newResized, event) => {console.log('resize改变触发的函数')}}*/
                    manual
                    onFetchData={(state, instance) => {
                        this.setState({loading: true})
                        Axios.post(axiosSrc, {
                            page: state.page,
                            pageSize: state.pageSize,
                            sorted: state.sorted,
                            filtered: state.filtered
                        })
                        .then((res) => {
                            console.log('-------------------------');
                            console.log(res);
                            this.setState({
                                data: res.data.rows,
                                pages: res.data.pages,
                                loading: false
                            })
                        })
                    }}
                />
                <Link to="/">main</Link>
            </div>
        )
    }
}

