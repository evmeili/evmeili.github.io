import { Layout, Icon, message } from 'antd';
import React from "react";
import axios from 'axios'
import qs from 'qs';
const { Content, Header } = Layout;

export default class Complaint extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            namePort: '',
            title: '',
            contentPort: '',
            arrData: []

        }
    }
    getTitle(event) {
        this.setState({
            title: event.target.value
        })
    }
    getPort(event) {
        this.setState({
            contentPort: event.target.value
        })
    }
    Stureport() {
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes();
        axios.post("http://localhost:3001/Stureport", qs.stringify({
            contentPort: this.state.contentPort,
            name: this.state.namePort,
            title: this.state.title,
            timer: date
        })).then(({ data }) => {
            console.log(data)
            if (data) {
                this.setState({
                    title: '',
                    contentPort: '',
                    arrData: data
                })
                message.success('提交成功')
            }
        })
            .catch(function (error) {
                message.error('提交失败');
            });

    }
    componentWillMount() {
        const name = sessionStorage.getItem('username');
        this.setState({
            namePort: name
        });
        axios.get("http://localhost:3001/weeklyFind", {
            params: {
                name: name
            }
        }).then(({ data }) => {
            if (data) {
                this.setState({
                    arrData: data
                })
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
                                <li className="active_test">学员周报</li>
                            </ul>
                        </Header>
                        <div className="page-header"></div>
                    </div>
                    <Content>
                        <div className="col-sm-6">
                            <div className="tab-content">
                                <form className="form-horizontal" id="actionform">
                                    <input type="hidden" name="stuid" />
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label no-padding-right" style={{ color: 'red' }}> 学员姓名： </label>
                                        <div className="col-sm-10">
                                            <div style={{ float: 'left' }}>
                                                <input type="text" id="StuName" name="StuName" placeholder="学员姓名(必填)" value={this.state.namePort} readOnly className="col-xs-10 col-sm-5" style={{ width: '150px' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label no-padding-right" style={{ color: 'red' }} > 周报标题： </label>
                                        <div className="col-sm-10">
                                            <div>
                                                <input type="text" id="title" name="title" placeholder="请填写周报标题" className="col-xs-10 col-sm-5" style={{ width: '150px' }} value={this.state.title} onChange={this.getTitle.bind(this)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label no-padding-right" style={{ color: 'red' }}> 周报内容： </label>
                                        <div className="col-sm-10">
                                            <div style={{ float: 'left' }}>
                                                <textarea placeholder="请输入周报理由" style={{ width: '592px', height: '90px' }} id="content" name="content" value={this.state.contentPort} onChange={this.getPort.bind(this)}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group" style={{ textAlign: 'left' }}>
                                        <div className="col-md-offset-3 col-md-9" style={{ marginTop: '206px' }}>
                                            <button className="btn btn-info" id="addstudent" type="button" onClick={this.Stureport.bind(this)}>
                                                <Icon type="check" />
                                                添加
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
                            <br></br>
                            <div className="table-responsive" style={{ overflow: 'auto' }}>
                                <table id="sample-table-2" className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th width="5%">姓名</th>
                                            <th width="8%">周报标题</th>
                                            <th width="30%">周报内容</th>
                                            <th width="6%">周报状态</th>
                                            <th width="6%">创建时间</th>
                                        </tr>
                                    </thead>
                                    <tbody>{this.state.arrData.map((item,index) => {
                                        return <tr key={index}>
                                            <td>
                                                <div className="dataTables_paginate paging_bootstrap" style={{ textAlign: 'center' }}>
                                                    {item.name}
                                                </div>
                                            </td>
                                            <td>
                                                <div className="dataTables_paginate paging_bootstrap" style={{ textAlign: 'center' }}>
                                                    {item.title}
                                                </div>
                                            </td>
                                            <td>
                                                <div className="dataTables_paginate paging_bootstrap" style={{ textAlign: 'center' }}>
                                                    {item.contentPort}
                                                </div>
                                            </td>
                                            <td>
                                                <div className="dataTables_paginate paging_bootstrap" style={{ textAlign: 'center' }}>
                                                    {item.state}
                                                </div>
                                            </td>
                                            <td>
                                                <div className="dataTables_paginate paging_bootstrap" style={{ textAlign: 'center' }}>
                                                    {item.timer}
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

