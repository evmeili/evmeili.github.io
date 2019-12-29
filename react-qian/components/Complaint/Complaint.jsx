import { Layout, message } from 'antd';
import React from "react";
import './Css/complaint.css'
import axios from 'axios'
import qs from 'qs';
const { Content, Header } = Layout;

export default class Complaint extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contentText: '',
            timer: ''
        }
    }
    getInputValue(event) {
        this.setState({
            contentText: event.target.value
        })

    }
    clear() {
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes();
        axios.post("http://localhost:3001/complaint", qs.stringify({
            complaint: this.state.contentText,
            timer: date
        })).then(({ data }) => {
            if (data) {
                this.setState({
                    contentText: ''
                })
                message.success('提交成功')
            } else {
                message.error('提交失败');
            }
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
                                <li className="active_test">匿名投诉</li>
                            </ul>
                        </Header>
                        <div className="page-header"></div>
                    </div>
                    <Content>
                        <div className="col-sm-6">
                            <div className="tab-content">
                                <form className="form-horizontal" id="actionform" >
                                    <input type="hidden" name="stuid" />
                                    <input type="hidden" name="cid" />
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label no-padding-right" style={{ color: 'red' }}> 投诉内容： </label>
                                        <div className="col-sm-10">
                                            <textarea placeholder="本投诉是匿名投诉，不会暴露您的信息" style={{ width: '592px', height: '290px' }} id="content" name="content" value={this.state.contentText} onChange={this.getInputValue.bind(this)}></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group" style={{ textAlign: 'left' }}>
                                        <div className="col-md-offset-3 col-md-9" style={{ marginTop: '50px' }}>
                                            <button className="btn btn-info" id="addstudent" type="button" onClick={this.clear.bind(this)}>
                                                <i className="icon-ok bigger-110"></i>
                                                添加
                                                        </button>
                                            &nbsp; &nbsp; &nbsp;
                                                        <button className="btn" type="reset" style={{ marginLeft: '100px' }}>
                                                <i className="icon-undo bigger-110"></i>
                                                返回
                                                        </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </div >
        )
    }
}
