import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import UnapprovalAdvice from './unapprovalAdvice';
import ApprovaledAdvice from './approvaledAdvice';

export default class ApprovalAdvice extends Component {
    render() {
        return (
            <div>
                <h5>投资建议审批页面</h5>
                <Tabs>
                    <TabList>
                        <Tab>待审批</Tab>
                        <Tab>已审批</Tab>
                    </TabList>
                    <TabPanel>
                        <UnapprovalAdvice />
                    </TabPanel>
                    <TabPanel>
                        <ApprovaledAdvice />
                    </TabPanel>
                </Tabs>
                <div className="pria-buttons">
                    <button className="btn btn-danger">投资建议审批</button>
                </div>
            </div>
        )
    }
}


