import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Currency from '../../components/Currency/Currency'
import Complaint from '../../components/Complaint/Complaint'
import Projectup from '../../components/Projectup/Projectup'
import Vip from '../../components/Vip/Vip'
import Stureport from '../../components/Stureport/Stureport'
import Information from '../../components/Information/Information'
import Payment from '../../components/Payment/Payment'
import Login from '../../components/Login/Login'
// import stores from '../../stores'


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default class Alayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOut: false,
            name: ''
        }
    }
    toOut() {
        this.setState({
            isOut: !this.state.isOut
        })

    }
    //点击退出后就隐藏
    out() {
        this.setState({
            isOut: !this.state.isOut
        })
        sessionStorage.clear();
    }

    //周期
    componentDidMount() {
        const username = sessionStorage.getItem("username");
        this.setState({
            name: username
        })
        //监听仓库的变化
        // stores.subscribe(()=> {
        //     this.setState({name: stores.getState().nameTex})
        // })
        // console.log(this.state.name)
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Router path="/main">
                        <Layout>
                            <Header className="header">
                                <div className="logo" />
                                <Menu
                                    theme="dark"
                                    mode="horizontal"
                                    defaultSelectedKeys={['2']}
                                    style={{ lineHeight: '64px' }}
                                >
                                    <Menu.Item key="1">
                                        <Link to="/main/nav1">
                                            <div className="logo_img">
                                                <img src="http://stu.1000phone.net/Public/assets/css/images/logo.png?1574047743" alt="" />
                                            </div>
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <div className="haeder_name" onClick={this.toOut.bind(this)}>
                                            <span>
                                                {this.state.name}
                                            </span>
                                            <Icon type="caret-down" />
                                        </div>
                                        <ul className={this.state.isOut ? "dropdown-menu" : "dropdown-out"}>
                                            <li className="divider"></li>
                                            <li onClick={this.out.bind(this)}>
                                                <Link to="/login">
                                                    <Icon type="poweroff" />
                                                    退出
                                                </Link>
                                            </li>
                                        </ul>

                                    </Menu.Item>
                                </Menu>
                            </Header>
                            <Switch>
                                <Route path="/main/nav1">
                                    <Content style={{ padding: '0 10px' }}>
                                        <Layout style={{ padding: '0px 0', background: '#fff' }}>
                                            <Sider width={200} style={{ background: '#fff' }}>
                                                <Menu
                                                    mode="inline"
                                                    defaultSelectedKeys={['1']}
                                                    defaultOpenKeys={['sub1']}
                                                    style={{ height: '100%' }}
                                                >
                                                    <SubMenu
                                                        key="sub1"
                                                        title={
                                                            <span>
                                                                <Icon type="user" />
                                                                学员后台
                                                            </span>
                                                        }
                                                    >
                                                        <Menu.Item key="1"><Link to="/main/nav1/complaint">匿名投诉</Link></Menu.Item>
                                                        <Menu.Item key="2"><Link to="/main/nav1/problem">技术问题</Link></Menu.Item>
                                                        <Menu.Item key="3"><Link to="/main/nav1/itemupload">项目上传</Link></Menu.Item>
                                                        <Menu.Item key="4"><Link to="/main/nav1/stuvip">VIP</Link></Menu.Item>
                                                        <Menu.Item key="9"><Link to="/main/nav1/weekly">学员周报</Link></Menu.Item>
                                                        <Menu.Item key="10"><Link to="/main/nav1/index">我的资料</Link></Menu.Item>
                                                        <Menu.Item key="11"><Link to="/main/nav1/moneyDetail">交费明细</Link></Menu.Item>
                                                        <Menu.Item key="12"><Link to="/main/nav1/option12">参加考试</Link></Menu.Item>
                                                        <Menu.Item key="13"><Link to="/main/nav1/option13">学员评价</Link></Menu.Item>
                                                        <Menu.Item key="14"><Link to="/main/nav1/option14">教学测评</Link></Menu.Item>
                                                    </SubMenu>
                                                    <SubMenu
                                                        key="sub2"
                                                        title={
                                                            <span>
                                                                <Icon type="barcode" />
                                                                学员考勤
                </span>
                                                        }
                                                    >
                                                        <Menu.Item key="5"><Link to="/main/nav1/option5">学员请假</Link></Menu.Item>
                                                        <Menu.Item key="6"><Link to="/main/nav1/option6">学员违纪</Link></Menu.Item>
                                                    </SubMenu>
                                                </Menu>
                                            </Sider>
                                            <Content style={{ padding: '0 0px', minHeight: 280 }}>
                                                <Switch>
                                                    <Route path="/main/nav1/complaint">
                                                        <Complaint />
                                                    </Route>
                                                    <Route path="/main/nav1/problem">
                                                        <Currency />
                                                    </Route>
                                                    <Route path="/main/nav1/itemupload">
                                                        <Projectup />
                                                    </Route>
                                                    <Route path="/main/nav1/stuvip">
                                                        <Vip />
                                                    </Route>
                                                    <Route path="/main/nav1/option5">
                                                        <div>option5</div>
                                                    </Route>
                                                    <Route path="/main/nav1/option6">
                                                        <div>option6</div>
                                                    </Route>
                                                    <Route path="/main/nav1/weekly">
                                                        <Stureport />
                                                    </Route>
                                                    <Route path="/main/nav1/index">
                                                        <Information />
                                                    </Route>
                                                    <Route path="/main/nav1/moneyDetail">
                                                        <Payment />
                                                    </Route>
                                                    <Route path="/main/nav1/option12">
                                                        <div>option12</div>
                                                    </Route>
                                                    <Route path="/main/nav1/option13">
                                                        <div>option13</div>
                                                    </Route>
                                                    <Route path="/main/nav1/option14">
                                                        <div>option14</div>
                                                    </Route>
                                                </Switch>
                                            </Content>
                                        </Layout>
                                    </Content>
                                </Route>
                            </Switch>

                        </Layout>
                    </Router>
                    <Router path="/login">
                        <Login />
                    </Router>
                    <Redirect to="/login" />
                </Switch>

            </Router>
        )
    }
}
