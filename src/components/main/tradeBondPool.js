import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CreditBondPool from './tradeCreditBondPool';
import AbsBondPool from './tradeAbsBondPool';

var TradeBondPool = React.createClass({
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
        return (
            <div>
                <h5>交易池页面</h5>
                <Tabs>
                    <TabList>
                        <Tab>信用券</Tab>
                        <Tab>ABS及其他</Tab>
                    </TabList>
                    <TabPanel>
                        <CreditBondPool />
                    </TabPanel>
                    <TabPanel>
                        <AbsBondPool />
                    </TabPanel>
                </Tabs>
                <div className="pria-buttons">
                    <button className="btn btn-danger">批量导入</button>
                </div>
            </div>
        )
    }
});

export default TradeBondPool;



