import React from "react";
import { Icon } from 'antd';
import qs from 'qs';
import axios from 'axios'
import './css/login.css'
// import stores from '../../stores'
import { createHashHistory } from 'history';


export default class Alayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nameText: '',
            password: '',
            isClass: false
        }
    }
    //输入框onchange触发拿到输入框的值
    getInputValue(event) {
        this.setState({
            nameText: event.target.value
        });

    }
    getInputPass(event) {
        this.setState({
            password: event.target.value
        })
    }

    tologin() {
        axios.post("http://localhost:3001/login", qs.stringify({
            user: this.state.nameText,
            password: this.state.password
        })).then(({ data }) => {
            if (data.length != 0) {
                const name = data[0].name
                sessionStorage.setItem("username", name);
                const history = createHashHistory();
                history.push('/main/nav1/index');
                // stores.dispatch({
                //     type: 'username',
                //     nameTex: name
                // })

            } else {
                this.setState({
                    isClass: true
                })
            }
        });

    }

    render() {
        return (
            <div className="login" style={{ background: '#6fb3e0' }}>
                <div className="main-container">
                    <div className="main-content">
                        <div id="login-box" className="login-box visible widget-box no-border">
                            <div className="widget-body">
                                <div className="widget-main">
                                    <h4 className=" blue lighter bigger" style={{ textAlign: 'center', fontSize: '27px' }}>
                                        学员后台系统
									</h4>
                                    <div className="space-6"></div>
                                    <form className="form-vertical login-form">
                                        <fieldset>
                                            <label className="block clearfix">
                                                <span className="block input-icon input-icon-right">
                                                    <input type="text" className="form-control" placeholder="身份证号码/学号" value={this.state.nameText} onChange={this.getInputValue.bind(this)} />
                                                    <Icon type="user" />
                                                </span>
                                            </label>
                                            <div className="divLogin">
                                                <label className="block clearfix">
                                                    <span className="block input-icon input-icon-right">
                                                        <input type="password" className="form-control" placeholder="密码" value={this.state.password} onChange={this.getInputPass.bind(this)} />
                                                        <Icon type="bug" />
                                                    </span>
                                                </label>
                                                <span className={this.state.isClass ? 'sp_block' : 'sp_none'}>账号密码不匹配</span>
                                            </div>
                                            <div className="space"></div>
                                            <div className="clearfix" onClick={this.tologin.bind(this)}>
                                                <button type="button" className="width-100 pull-right btn btn-sm btn-primary">
                                                    <Icon type="key" />
                                                    登录
													</button>
                                            </div>
                                            <div className="space-4"></div>
                                        </fieldset>
                                    </form>
                                    <div className="social-or-login center">
                                        <span className="bigger-110">
                                            <a href="###" style={{ color: '#f6003c' }}>切换新版学员系统，抢先体验</a>
                                        </span>
                                    </div>
                                </div>
                                <div className="toolbar">
                                    <div style={{ textAlign: 'center', width: '100%', color: 'white' }}>
                                        <a style={{ color: 'white' }} href="###" target="_blank">  学习总结入口 </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}