import React, { Component } from 'react';
import { Tabs, Button } from 'antd';
import { Avatar } from 'antd';
import { Input } from 'antd';
import '../Header/Header.css'
import Item from '../../../node_modules/antd/lib/list/Item';
const icon = require('./img/a.jpg');
export default class ButtonBox extends Component {
    constructor() {
        super();
    }
    render() {
        const { state } = this.props;
        console.log(state);
        return (
            <div className="header">
                <Avatar shape="square" src={state.HeaderReducer.img} style={{ width: '100px', height: '100px', marginTop: '10px', marginLeft: '10px' }} />
                <div className="left1">
                    {
                        Object.keys(state.HeaderReducer.map[0]).map((item, index) => {
                            return (
                                <div className="item" key={index}>
                                    {state.HeaderReducer.map[0][item]}:{state.HeaderReducer.user[0][item]}
                                </div>
                            )
                        })
                    }
                    {/* <li className="item">学员编号:{this.state.userdata[0].number}</li>
         <li className="item">在学课程：{this.state.userdata[0].class}</li>
         <li className="item">入学时间：{this.state.userdata[0].starttime}</li>
         </ul>
         <ul className="left2">
         <li className="item">历史付费额:{this.state.userdata[0].spend}</li>
         <li className="item">累计学习天数：{this.state.userdata[0].day}</li>
         <li className="item">最后登陆时间：{this.state.userdata[0].loadtime}</li>     */}
                </div>
                <div className="right">
                    {/* <Input size="small" style={{ width: '100px', height: '20px', marginTop: '20px', marginLeft: '-185px' }} />
                        {/* <li><input className="app-input" ref="myInput" ></input></li> */}
                    {/* <Button className="submit" style={{ width: '55px', height: '20px', marginTop: '24px', marginLeft: '220px' }}>提交</Button>
                        <Input size="small" style={{ width: '100px', height: '20px', marginTop: '40px', marginLeft: '-185px' }} /> */}
                    {/* <li><input className="app-input" ref="myInput" ></input></li> */}
                    {/* <Button className="submit1" style={{ width: '55px', height: '20px', marginTop: '10px', marginLeft: '220px' }}>提交</Button> */}

                </div>
            </div>
        )
    }
}
