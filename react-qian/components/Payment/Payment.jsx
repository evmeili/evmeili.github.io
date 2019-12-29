import { Layout } from 'antd';
import React from "react";
import './css/payment.css';
import axios from 'axios';
const { Header, Content } = Layout;

export default class Complaint extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: []
        }
    }
    componentDidMount() {
        const username = sessionStorage.getItem("username");
        axios.get('http://localhost:3001/Payment', {
            params: {
                name: username
            }
        }).then(({ data }) => {
            console.log(data)
            this.setState({
                arr: data
            })
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
                                <li className="active_test">交费明细</li>
                            </ul>
                        </Header>
                        <div className="page-header"></div>
                    </div>
                    <Content>
                        <div className="pay_table">
                            <table className="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <td>标题</td>
                                        <td>金额</td>
                                        <td>收据号/订单号</td>
                                        <td>收据编号</td>
                                        <td>入账地点</td>
                                        <td>类型</td>
                                        <td>操作人</td>
                                        <td>状态</td>
                                        <td>添加时间</td>
                                        <td>操作</td>
                                    </tr>
                                </thead>
                                {this.state.arr.map((item, index) => {
                                    return <tbody key={index}>
                                        <tr>
                                            <td>{item.Tuition.name} 学费</td>
                                            <td>{item.Tuition.money}</td>
                                            <td>{item.Tuition.orderNumber}</td>
                                            <td></td>
                                            <td>{item.Tuition.place}</td>
                                            <td>{item.Tuition.payMethod}</td>
                                            <td>{item.Tuition.operator}</td>
                                            <td>{item.Tuition.state}</td>
                                            <td>{item.Tuition.timer}</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>{item.Seatcharge.name} 占座费</td>
                                            <td>{item.Seatcharge.money}</td>
                                            <td></td>
                                            <td></td>
                                            <td>{item.Seatcharge.place}</td>
                                            <td>{item.Seatcharge.paymethod}</td>
                                            <td>{item.Seatcharge.operator}</td>
                                            <td>{item.Seatcharge.state}</td>
                                            <td>{item.Seatcharge.timer}</td>
                                            <td></td>

                                        </tr>
                                        <tr>
                                            <td colSpan="11" style={{ fontSize: '14px' }}>
                                                <h5>学费总额：{item.totalFee}  </h5>  (交费 - 退费)
                                        </td>
                                        </tr>
                                    </tbody>
                                })}
                            </table>
                            <div className="page-header" style={{ textAlign: 'center', padding: '0px' }}>
                                <h3>退费详情</h3>
                            </div>
                            <table className="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <td>标题</td>
                                        <td>金额</td>
                                        <td>收据号</td>
                                        <td>收据编号</td>
                                        <td>退费地点</td>
                                        <td>操作人</td>
                                        <td>添加时间</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan="11">
                                            <div className="dataTables_paginate paging_bootstrap" style={{ textAlign: 'center' }}>
                                                <ul className="pagination"></ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Content>

                </Layout>
            </div>
        )
    }
}

