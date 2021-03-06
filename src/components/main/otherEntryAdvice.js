import React from 'react';
import {FormControl, FormGroup, Row, ControlLabel, Textarea, Radio, Button} from 'react-bootstrap';

var OtherEntryAdvice = React.createClass({
    getInitialState(){
        return {

        }
    },
    handleSubmit() {
        console.log('表单提交触发');
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
                            <ControlLabel>指令要素</ControlLabel>
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

export default OtherEntryAdvice;



