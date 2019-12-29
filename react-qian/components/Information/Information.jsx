import { Layout, Icon } from 'antd';
import React from "react";
import './css/information.css';
import axios from 'axios';
const { Header, Content } = Layout;

export default class Complaint extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            datas:{}
        }
    }
    componentDidMount() {
        const username = sessionStorage.getItem("username");
        axios.get('http://localhost:3001/information', {
            params: {
                name: username
            }
        }).then(({ data }) => {
            this.setState({
                datas: data[0]
            })
          
        })
    }
    render() {
        return (
            <div>
                <Layout className="layout_main">
                    <Header>
                        <ul className="breadcrumb">
                            <li className="active_test">
                                <a>系统管理 > </a>
                            </li>
                            <li className="active_test">后台首页</li>
                        </ul>
                    </Header>
                    <Content>
                        <div className="col-xs-12">
                            <div className="page-header">
                                <button type="button" className="btn btn-xs btn-primary" style={{ float: 'right', marginRight: '23px', width: '100px', height: '30px' }}>修改</button>
                                &nbsp;
                            </div>
                            <div id="user-profile-1" className="user-profile row">
                                <div className="col-xs-12 col-sm-3 center">
                                    <div>
                                        <span className="profile-picture">
                                            <img id="avatar" style={{ width: '180px', height: '200px' }} className="editable img-responsive editable-click editable-empty" alt="请上传照片" src={this.state.datas.nameimg} />
                                        </span>
                                        <div className="space-4"></div>
                                        <div className="width-80 label label-info label-xlg arrowed-in arrowed-in-right">
                                            <div className="inline position-relative">
                                                <a href="###" className="user-title-label dropdown-toggle" data-toggle="dropdown">
                                                    <Icon type="heart" theme="filled" style={{ color: 'red' }} />
                                                    &nbsp;
						                    <span className="white">{this.state.datas.name} &nbsp;&nbsp; ({this.state.datas.gander}) </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-9">
                                    <div className="profile-user-info profile-user-info-striped">
                                        <div className="profile-info-row">
                                            <div className="profile-info-name"> 身份证号码 </div>
                                            <div className="profile-info-value">
                                                <span id="showIdCard">{this.state.datas.ID}</span>
                                                <a href="###" style={{ marginLeft: '50px' }} ></a>
                                                <input type="hidden" id="idNumber" value="450621199810091426" />
                                            </div>
                                        </div>
                                        <div className="profile-info-row" style={{ height: '32px' }}>
                                            <div className="profile-info-name"> 手机号 </div>
                                            <div className="profile-info-value">
                                            {this.state.datas.phone}
				                        </div>
                                        </div>
                                        <div className="profile-info-row" style={{ height: '32px' }}>
                                            <div className="profile-info-name"> QQ </div>
                                            <div className="profile-info-value">
                                            {this.state.datas.QQ}
				                        </div>
                                        </div>
                                        <div className="profile-info-row" style={{ height: '32px' }}>
                                            <div className="profile-info-name"> 学号 </div>
                                            <div className="profile-info-value">
                                            {this.state.datas.studentID}
                                        </div>
                                        </div>
                                        <div className="profile-info-row" style={{ height: '32px' }}>
                                            <div className="profile-info-name"> 毕业学院 </div>
                                            <div className="profile-info-value">
                                            {this.state.datas.school} &nbsp;&nbsp; {this.state.datas.major}
                                        </div>
                                        </div>
                                        <div className="profile-info-row" style={{ height: '32px' }}>
                                            <div className="profile-info-name"> 在校状态 </div>
                                            <div className="profile-info-value">
                                            {this.state.datas.schoolstatus}
                                        </div>
                                        </div>
                                        <div className="profile-info-row" style={{ height: '32px' }}>
                                            <div className="profile-info-name"> 学历 </div>
                                            <div className="profile-info-value">
                                                {this.state.datas.education}
                                        </div>
                                        </div>
                                        <div className="profile-info-row" style={{ height: '32px' }}>
                                            <div className="profile-info-name"> 千锋班级 </div>
                                            <div className="profile-info-value">
                                                {this.state.datas.class}
                                        </div>
                                        </div>
                                        <div className="profile-info-row" style={{ height: '32px' }}>
                                            <div className="profile-info-name"> 招生老师 </div>
                                            <div className="profile-info-value">
                                            {this.state.datas.enteacher}
                                        </div>
                                        </div>
                                        <div className="profile-info-row" style={{ height: '32px' }}>
                                            <div className="profile-info-name"> 报名日期 </div>
                                            <div className="profile-info-value">
                                                2019-03-24
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12">
                                <div className="form-group">
                                    <div className="table-responsive" style={{ overflow: 'auto' }}>
                                        <span className="col-xs-6">
                                            <span className="inline">
                                                <h5>[ <b>我的消息</b> ]</h5>
                                            </span>
                                        </span>
                                        <table id="" className="table table-bordered">
                                            <tbody>
                                                <tr style={{ backgroundColor: '#edf3f4' }}>
                                                    <th width="24%">消息内容</th>
                                                    <th width="3%">时间</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="table-responsive" style={{ overflow: 'auto' }}>
                                        <span className="col-xs-6">
                                            <span className="inline">
                                                <h5>[ <b>班主任寄语</b> ]</h5>
                                            </span>
                                        </span>
                                        <table id="" className="table table-bordered">
                                            <tbody>
                                                <tr style={{ backgroundColor: '#edf3f4' }}>
                                                    <th width="4%">评价老师</th>
                                                    <th width="20%">寄语内容</th>
                                                    <th width="5%">时间</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="table-responsive" style={{ overflow: 'auto' }}>
                                        <span className="col-xs-6">
                                            <span className="inline">
                                                <h5>[ <b>千锋其他会员开通</b> ]</h5>
                                            </span>
                                        </span>
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr style={{ backgroundColor: '#edf3f4' }}>
                                                    <th width="4%">产品名称</th>
                                                    <th width="20%">产品描述</th>
                                                    <th width="15%">开通信息</th>
                                                </tr>
                                                <tr>
                                                    <td>扣丁学堂</td>
                                                    <td>扣丁学堂大量免费线上视频，不定期更新，为您规划职业路线。
                                                    <br></br>
                                                        官方网站: <a href="###">http://www.codingke.com</a>

                                                    </td>
                                                    <td>
                                                        <font color="red">您还未开通扣丁学堂 </font>
                                                        <button data-id="1">立即开通</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </div>
        )
    }
}