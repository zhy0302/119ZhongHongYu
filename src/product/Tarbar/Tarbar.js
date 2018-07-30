import React, { Component } from 'react';
import { Tabs } from 'antd';
export default class ButtonBox extends Component {
    callback=(key)=> {
     console.log(key);
    } 
    render( mountNode){
    const TabPane = Tabs.TabPane;
    return (
      <Tabs defaultActiveKey="1" onChange={this.callback()}>
      <TabPane tab="课程信息" key="1"> </TabPane>
      <TabPane tab="满意度反馈" key="2"></TabPane>
      </Tabs> 
     
          )
      }
    }
