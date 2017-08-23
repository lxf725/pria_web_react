import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import BankRepoQueryAdvice from './bankRepoQueryAdvice';
import BankBondQueryAdvice from './bankBondQueryAdvice';
import ExchangeRepoQueryAdvice from './exchangeRepoQueryAdvice';
import ExchangeBondQueryAdvice from './exchangeBondQueryAdvice';
import ExchangeBidQueryAdvice from './exchangeBidQueryAdvice';
import OtherQueryAdvice from './otherQueryAdvice';

var QueryAdvice = React.createClass({
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
                <h5>投资建议列表页面等级分类登记</h5>
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
                        <BankRepoQueryAdvice />
                    </TabPanel>
                    <TabPanel>
                        <BankBondQueryAdvice />
                    </TabPanel>
                    <TabPanel>
                        <ExchangeRepoQueryAdvice />
                    </TabPanel>
                    <TabPanel>
                        <ExchangeBondQueryAdvice />
                    </TabPanel>
                    <TabPanel>
                        <ExchangeBidQueryAdvice />
                    </TabPanel>
                    <TabPanel>
                        <OtherQueryAdvice />
                    </TabPanel>
                </Tabs>
                <div className="pria-buttons">
                    <button className="btn btn-danger">新增</button>
                    <button className="btn btn-warning">修改</button>
                    <button className="btn btn-primary">删除</button>
                </div>
            </div>
        )
    }
});

export default QueryAdvice;







