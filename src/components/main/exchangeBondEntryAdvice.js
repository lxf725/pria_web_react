import React from 'react';
import {FormControl, FormGroup, Row, ControlLabel, Textarea, Radio, Button} from 'react-bootstrap';

var ExchangeBondEntryAdvice = React.createClass({
    getInitialState(){
        return {

        }
    },
    onSearch() {
        console.log('按钮点击触发');
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
                            <ControlLabel>交易平台</ControlLabel>
                            <FormControl
                                ref={select => { this.select = select }}
                                componentClass="select"
                                disabled={this.state.added}>
                                <option value="0">请选择</option>
                            </FormControl>
                        </FormGroup>
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
                            <ControlLabel>债券代码</ControlLabel>
                            <FormControl type="text" />
                        </FormGroup>
                        <FormGroup className="col-lg-3">
                            <ControlLabel>债券名称</ControlLabel>
                            <FormControl type="text" />
                        </FormGroup>
                        <FormGroup className="col-lg-3">
                            <ControlLabel>交易数量(张)</ControlLabel>
                            <FormControl type="text" />
                        </FormGroup>
                        <FormGroup className="col-lg-3">
                            <ControlLabel>约定号</ControlLabel>
                            <Radio name="radioGroup" inline defaultChecked className="pria-form-radio">
                                <span className="pria-form-radio-span">T+0</span>
                            </Radio>
                            <Radio name="radioGroup" inline className="pria-form-radio">
                                <span>T+1</span>
                            </Radio>
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup className="col-lg-3">
                            <ControlLabel>报价方式</ControlLabel>
                            <FormControl type="text" />
                        </FormGroup>
                        <FormGroup className="col-lg-3">
                            <ControlLabel>交易价格</ControlLabel>
                            <FormControl type="text" />
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
                    <Row className="pria-buttons">
                        <Button className="btn btn-warning">取消</Button>
                        <Button className="btn btn-success">确定</Button>
                    </Row>
                </form>
            </div>
        )
    }
});

export default ExchangeBondEntryAdvice;



