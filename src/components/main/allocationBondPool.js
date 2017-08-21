import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AllocationCreditBondPool from './allocationCreditBondPool';
import AllocationAbsBondPool from './allocationAbsBondPool';

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
        return (
            <div>
                <h5>配置池页面</h5>
                <Tabs>
                    <TabList>
                        <Tab>信用券</Tab>
                        <Tab>ABS及其他</Tab>
                    </TabList>
                    <TabPanel>
                        <AllocationCreditBondPool />
                    </TabPanel>
                    <TabPanel>
                        <AllocationAbsBondPool />
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
});

export default  AllocationBondPool;






