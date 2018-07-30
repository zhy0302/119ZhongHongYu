import React, { Component } from 'react';
import { Tabs, Button } from 'antd';
import { Avatar } from 'antd';
import { Input } from 'antd';
import '../Header/Header.css'
const icon = require('./img/a.jpg');
export default class ButtonBox extends Component { 
    constructor() {
        super();
    this.state = {
           userdata: [
              { 
                number: 'Md3309000002',
                class:'摄影课 绘画课',
            starttime:'2018-03-30',
                spend:'987',
                day:'876t天',
                loadtime:'2018-03-30'
              },
            ],
        }
    }


    
    render(){      
    return (
     <div className="header">
        <Avatar shape="square"  src={icon} style={{ width:'100px',height:'100px',marginTop:'10px',marginLeft:'10px'}}/> 
         <ul className="left1">  
         <li className="item">学员编号:{this.state.userdata[0].number}</li>
         <li className="item">在学课程：{this.state.userdata[0].class}</li>
         <li className="item">入学时间：{this.state.userdata[0].starttime}</li>
         </ul>
         <ul className="left2">
         <li className="item">历史付费额:{this.state.userdata[0].spend}</li>
         <li className="item">累计学习天数：{this.state.userdata[0].day}</li>
         <li className="item">最后登陆时间：{this.state.userdata[0].loadtime}</li>    
         </ul>
        <div className="right">
         <div>手机号码：13213145201</div>
         <Input size="small" placeholder="微信号码" />
         <Button className="submit">提交</Button>
         <Input size="small" placeholder="备注" />
         <Button className="submit">提交</Button>
         </div> 
     </div>
          )
      }     
}
  