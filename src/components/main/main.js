import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setHistory } from '../../redux/action';
import echarts from 'echarts';
import '../../style/main.css';

class Main extends Component {
    componentDidMount(){
        this.props.setHistory(this.props.history);
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: { text: '证券公司基金总额' },
            tooltip: {},
            xAxis: {
                data: ["德邦", "华创", "国君", "光大", "华信", "华菁"]
            },
            yAxis: {},
            series: [{
                name: '资金总额',
                type: 'bar',
                data: [5.8, 20.23, 36.9, 10.6, 10.7, 20.2]
            }]
        });
    }

    render() {
        return (
            <div>
                <div id="main" style={{ width: 1000, height: 700, marginLeft: 10, marginTop: 10}}></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    _history: state._history
})

const mapDispatchToProps = (dispatch) => ({
    setHistory: (_history) => {
        dispatch(setHistory(_history))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)


