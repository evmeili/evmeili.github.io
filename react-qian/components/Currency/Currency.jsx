import { Layout, Input, Icon, message } from 'antd';
import React from "react";
import './currency.css';
import axios from 'axios'
import qs from 'qs';
const { Content, Header } = Layout;
const { TextArea } = Input;

export default class Complaint extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nameCur: '',
            content: '',
            arr: []
        }
    }
    getInputValue(event) {
        this.setState({
            content: event.target.value
        })
    }
    submission() {
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes();
        axios.post("http://localhost:3001/currenncy", qs.stringify({
            complaint: this.state.content,
            name: this.state.nameCur,
            timer: date
        })).then(({ data }) => {
            if (data) {
                this.setState({
                    content: '',
                    arr: data
                })
                message.success('提交成功')
            } else {
                message.error('提交失败');
            }
            console.log(this.state.arr)
        });
    }
    componentWillMount() {
        const name = sessionStorage.getItem('username');
        axios.get("http://localhost:3001/currFind", {
            params: {
                name: name
            }
        }).then(({ data }) => {
            if (data) {
                this.setState({
                    arr: data
                })
            }
        });
        this.setState({
            nameCur: name
        })

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
                                <li className="active_test">技术问题</li>
                            </ul>
                        </Header>
                        <div className="page-header"></div>
                    </div>
                    <Content>
                        <div className="col-sm-6">
                            <div className="tab-content">
                                <form className="form-horizontal" id="actionform" action="" method="POST">
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label no-padding-right" style={{ color: 'red' }}> 学员姓名： </label>
                                        <div className="col-sm-10">
                                            <div style={{ float: 'left' }}>
                                                <input type="text" id="StuName" name="StuName" value={this.state.nameCur} readOnly placeholder="学员姓名(必填)" className="col-xs-10 col-sm-5" style={{ width: '150px' }} required="required" />
                                                <input type="hidden" name="stuid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label no-padding-right" style={{ color: 'red' }}> 问题内容： </label>
                                        <TextArea rows={4} className="col-tex" value={this.state.content} onChange={this.getInputValue.bind(this)} />
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-offset-3 col-md-9">
                                            <button className="btn btn-info" id="addstudent" type="button" onClick={this.submission.bind(this)}>
                                                <Icon type="check" />
                                                提问
                                            </button>
                                            &nbsp; &nbsp; &nbsp;
                                            <button className="btn" style={{ margin: '0px 0px 0px 100px' }}>
                                                <Icon type="undo" />
                                                返回
                                            </button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                            <br></br>
                            <div className="table-responsive" style={{ overflow: 'auto' }}>
                                <table id="sample-table-2" className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th width="3%">姓名</th>
                                            <th width="20%">问题理由</th>
                                            <th width="8%">创建时间</th>
                                            <th width="8%">回复</th>
                                        </tr>
                                    </thead>
                                    <tbody>{this.state.arr.map((item, index) => {
                                        return <tr key={index}>
                                            <td>
                                                <div className="dataTables_paginate paging_bootstrap" style={{ textAlign: 'center' }}>
                                                    {item.name}
                                                </div>
                                            </td>
                                            <td>
                                                <div className="dataTables_paginate paging_bootstrap" style={{ textAlign: 'center' }}>
                                                    {item.complaint}
                                                </div>
                                            </td>
                                            <td>
                                                <div className="dataTables_paginate paging_bootstrap" style={{ textAlign: 'center' }}>
                                                    {item.timer}
                                                </div>
                                            </td>
                                            <td>
                                                <div className="dataTables_paginate paging_bootstrap" style={{ textAlign: 'center' }}>
                                                    {item.answer}
                                                </div>
                                            </td>
                                        </tr>
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </div>
        )
    }
}

