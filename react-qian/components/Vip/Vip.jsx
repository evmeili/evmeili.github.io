import { Layout, Icon, message } from 'antd';
import React from "react";
import axios from 'axios';
import qs from 'qs';
const { Content, Header } = Layout;

export default class Complaint extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nameVip: '',
            reason: ''
        }

    }
    getInputValue(event) {
        this.setState({
            reason: event.target.value,
        })
    }
    componentWillMount() {
        const name = sessionStorage.getItem('username');
        this.setState({
            nameVip: name
        })
    }
    apply() {
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes();
        axios.post("http://localhost:3001/Apply", qs.stringify({
            reason: this.state.reason,
            name: this.state.nameVip,
            timer: date
        })).then(({ data }) => {
            if (data) {
                this.setState({
                    reason: ''
                })
                message.success('提交成功')
            }
        })
            .catch(function (error) {
                message.error('提交失败');
            });

    }

    render() {
        return (
            <div>
                <Layout className="layout_main">
                    <div>
                        <Header>
                            <ul className="breadcrumb">
                                <li className="active_test">
                                    <a>学员后台 > </a>
                                </li>
                                <li className="active_test">VIP</li>
                            </ul>
                        </Header>
                        <div className="page-header"></div>
                    </div>
                    <Content>
                        <div className="col-sm-6">
                            <div className="tab-content">
                                <form className="form-horizontal" id="actionform" >
                                    <input type="hidden" name="stuid" />
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label no-padding-right" style={{ color: 'red' }} > 学员姓名： </label>
                                        <div className="col-sm-10">
                                            <div style={{ float: 'left' }}>
                                                <input type="text" id="StuName" name="StuName" value={this.state.nameVip} readOnly placeholder="学员姓名(必填)" className="col-xs-10 col-sm-5" style={{ width: '150px' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label no-padding-right" style={{ color: 'red' }} > 申请理由： </label>
                                        <div className="col-sm-10">
                                            <div>
                                                <textarea placeholder="请输入申请理由" style={{ width: '592px', height: '90px' }} id="content" name="content" value={this.state.reason} onChange={this.getInputValue.bind(this)}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group" style={{ textAlign: 'left' }}>
                                        <div className="col-md-offset-3 col-md-9" style={{ marginTop: '50px' }}>
                                            <button className="btn btn-info" id="addstuvip" type="button" onClick={this.apply.bind(this)}>
                                                <Icon type="check" />
                                                申请
                                            </button>

                                            &nbsp; &nbsp; &nbsp;
                                            <button className="btn" type="reset" style={{ marginLeft: '100px' }} >
                                                <Icon type="undo" />
                                                返回
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </div>
        )
    }
}