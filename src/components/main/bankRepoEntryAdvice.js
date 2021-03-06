import React, {Component} from 'react';
import {FormControl, FormGroup, Row, ControlLabel, Textarea, Radio, Button} from 'react-bootstrap';

var PledgeComponent = React.createClass({
    render: function() {
        return (
            <div>
                <Row>
                    <FormGroup className="col-lg-3">
                        <ControlLabel>质押券代码</ControlLabel>
                        <FormControl type="text" value={this.props.pledgeCode}/>
                    </FormGroup>
                    <FormGroup className="col-lg-3">
                        <ControlLabel>质押券名称</ControlLabel>
                        <FormControl type="text" value={this.props.pledgeName}/>
                    </FormGroup>
                    <FormGroup className="col-lg-3">
                        <ControlLabel>面额</ControlLabel>
                        <FormControl type="text" value={this.props.amount}/>
                    </FormGroup>
                    <FormGroup className="col-lg-3">
                        <ControlLabel>折扣率</ControlLabel>
                        <FormControl type="text" className="pria-input-number" value={this.props.depositRate}/>
                        <Button onClick={this.addPledgeBond} className="pria-btn-add">+</Button>
                        <Button onClick={this.releasePledgeBond} className="pria-btn-add">-</Button>
                    </FormGroup>
                </Row>
            </div>
        );
    }
});

var BankRepoEntryAdvice = React.createClass({
    getInitialState(){
        return {

        }
    },
    addPledgeBond() {

    },
    releasePledgeBond() {

    },
    render() {
        return (
            <div className="pria-form-wrapper">
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <Row>
                        <FormGroup className="col-lg-6">
                            <ControlLabel>产品名称</ControlLabel>
                            <FormControl
                                ref={select => { this.select = select }}
                                componentClass="select"
                                disabled={this.state.added}>
                                <option value="0">请选择</option>
                            </FormControl>
                        </FormGroup>
                        <FormGroup className="col-lg-6">
                            <ControlLabel>交易日期</ControlLabel>
                            <FormControl type="text"/>
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup className="col-lg-3">
                            <ControlLabel>交易方向</ControlLabel>
                            <FormControl
                                ref={select => { this.select = select }}
                                componentClass="select"
                                disabled={this.state.added}>
                                <option value="0">请选择</option>
                            </FormControl>
                        </FormGroup>
                        <FormGroup className="col-lg-3">
                            <ControlLabel>交易类型</ControlLabel>
                            <FormControl
                                ref={select => { this.select = select }}
                                componentClass="select"
                                disabled={this.state.added}>
                                <option value="0">请选择</option>
                            </FormControl>
                        </FormGroup>
                        <FormGroup className="col-lg-3">
                            <ControlLabel>对手机构</ControlLabel>
                            <FormControl type="text" />
                        </FormGroup>
                        <FormGroup className="col-lg-3">
                            <ControlLabel>对手交易员</ControlLabel>
                            <FormControl type="text" />
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup className="col-lg-3">
                            <ControlLabel>回购利率</ControlLabel>
                            <FormControl type="text" />
                        </FormGroup>
                        <FormGroup className="col-lg-3">
                            <ControlLabel>回购期限</ControlLabel>
                            <FormControl type="text" />
                        </FormGroup>
                        <FormGroup className="col-lg-3">
                            <ControlLabel>首期净价</ControlLabel>
                            <FormControl type="text" />
                        </FormGroup>
                        <FormGroup className="col-lg-3">
                            <ControlLabel>清算速度</ControlLabel>
                            <Radio name="radioGroup" inline defaultChecked className="pria-form-radio">
                                <span className="pria-form-radio-span">T+0</span>
                            </Radio>
                            <Radio name="radioGroup" inline className="pria-form-radio">
                                <span>T+1</span>
                            </Radio>
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup className="col-lg-6">
                            <ControlLabel>关联交易披露</ControlLabel>
                            <textarea className="pria-textarea form-control"></textarea>
                        </FormGroup>
                        <FormGroup className="col-lg-6">
                            <ControlLabel>备注</ControlLabel>
                            <textarea className="pria-textarea form-control"></textarea>
                        </FormGroup>
                    </Row>
                    <h4>质押券信息</h4>
                    <Row>
                        <FormGroup className="col-lg-3">
                            <ControlLabel>质押券代码</ControlLabel>
                            <FormControl type="text" />
                        </FormGroup>
                        <FormGroup className="col-lg-3">
                            <ControlLabel>质押券名称</ControlLabel>
                            <FormControl type="text" />
                        </FormGroup>
                        <FormGroup className="col-lg-3">
                            <ControlLabel>面额</ControlLabel>
                            <FormControl type="text" />
                        </FormGroup>
                        <FormGroup className="col-lg-3">
                            <ControlLabel>折扣率</ControlLabel>
                            <FormControl type="text" className="pria-input-number"/>
                            <Button onClick={this.addPledgeBond} className="btn btn-primary pria-btn-add">+</Button>
                            <Button onClick={this.releasePledgeBond} className="btn btn-danger pria-btn-add">-</Button>
                        </FormGroup>
                    </Row>
                    <Row className="pria-buttons">
                        <Button className="btn btn-warning">取消</Button>
                        <Button className="btn btn-success">确定</Button>
                    </Row>
                </form>
            </div>
        )
    }
});

export default BankRepoEntryAdvice;



