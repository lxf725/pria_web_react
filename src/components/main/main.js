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
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }

    render() {
        return (
            <div>
                <div id="main" style={{ width: 1000, height: 800 }}></div>
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


