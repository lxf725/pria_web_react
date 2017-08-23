import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import BankRepoEntryAdvice from './bankRepoEntryAdvice';
import BankBondEntryAdvice from './bankBondEntryAdvice';
import ExchangeRepoEntryAdvice from './exchangeRepoEntryAdvice';
import ExchangeBondEntryAdvice from './exchangeBondEntryAdvice';
import ExchangeBidEntryAdvice from './exchangeBidEntryAdvice';
import OtherEntryAdvice from './otherEntryAdvice';

var EntryAdvice = React.createClass({
    getInitialState(){
        return {

        }
    },
    onSearch() {
        console.log('按钮点击触发');
    },
    render() {
        return (
            <div>
                <h5>投资建议录入页面</h5>
                <Tabs>
                    <TabList>
                        <Tab>银行间回购</Tab>
                        <Tab>银行间现券</Tab>
                        <Tab>交易所回购</Tab>
                        <Tab>交易所现券</Tab>
                        <Tab>交易所集中竞价</Tab>
                        <Tab>其他</Tab>
                    </TabList>
                    <TabPanel>
                        <BankRepoEntryAdvice />
                    </TabPanel>
                    <TabPanel>
                        <BankBondEntryAdvice />
                    </TabPanel>
                    <TabPanel>
                        <ExchangeRepoEntryAdvice />
                    </TabPanel>
                    <TabPanel>
                        <ExchangeBondEntryAdvice />
                    </TabPanel>
                    <TabPanel>
                        <ExchangeBidEntryAdvice />
                    </TabPanel>
                    <TabPanel>
                        <OtherEntryAdvice />
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
});

export default  EntryAdvice;







