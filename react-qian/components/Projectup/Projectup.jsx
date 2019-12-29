import { Layout, Icon, Input } from 'antd';
import React from "react";
const { Content,Header } = Layout;


export default class Complaint extends React.Component {
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
                                <li className="active_test">项目上传</li>
                            </ul>
                        </Header>
                        <div className="page-header"></div>
                    </div>
                    <Content>
                        <div className="col-sm-6">
                            <div className="tab-content">
                                <form className="form-horizontal" id="actionform" >
                                    <input type="hidden" name="stuid" value="138859" />
                                    <div className="form-group" style={{ marginTop: '25px' }}>
                                        <label className="col-sm-2 control-label no-padding-right" style={{ color: 'red' }} > 项目文件： </label>
                                        <div className="col-sm-10">
                                            <div style={{ float: 'left' }}>
                                                <input type="file" name="itemupload" id="file" />
                                            </div>
                                            <span style={{ color: 'red' }}>
                                                <b>注：请上传格式为【zip,rar】的压缩包,上传大小不得超过10M！</b>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group" style={{ textAlign: 'left' }}>
                                        <div className="col-md-offset-3 col-md-9" style={{ marginTop: '10px' }}>
                                            <button className="btn btn-info" id="addstudent" type="submit">
                                                <Icon type="check" />
                                                提交
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

