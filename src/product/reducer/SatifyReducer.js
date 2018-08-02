import * as ActionType from "../ActionType";
import React, { Component } from 'react';
import {message, Icon} from 'antd'
function click() {
  console.log("1")
  message.info('Clicked on Yes.');
}
const init_state3 = {
  dataSource: [{
    key: '0',
    class_info:'',
    course_name: '高级班',
    time: '进行中',
    teacher_info: '2017-04-20',
    satisfied_score:'3/21',
    satisfied_detail:'67.98',
    reply_status:'3/21',
  }, {
    key: '1',
    class_info:'',
    course_name: '高级班',
    time: '进行中',
    teacher_info: '2017-04-20',
    satisfied_score:'3/21',
    satisfied_detail:'67.98',
    reply_status:'3/21',
  },{
     key: '2',
  class_info:'',
  course_name: '教程',
  time: '开课时间',
  teacher_info:'开课时间',
  satisfied_score:'20/21',
  satisfied_detail:'76.89',
  reply_status:'3/21',
}],
   columns: [{
    title: '课程',
    dataIndex: 'class_info.name',
    key: 'class_info.name',
  },{
    title: '教程',
    dataIndex: 'course_name',
    key: 'course_name',
  }, {
    title: '开课时间',
    dataIndex: 'time',
    key: 'time',
  }, {
    title: '老师',
    dataIndex: 'teacher_info.nick',
    key: 'teacher_info.nick',
  },{
    title: '满意度评分',
    dataIndex: 'satisfied_score',
    key: 'satisfied_score',
  },{
    title: '具体反馈',
    dataIndex: 'satisfied_detail',
    key: 'satisfied_detail',
  },{
    title: '操作',
    dataIndex: 'reply_status',
    key: 'reply_status',
    render:(text)=>{
      if(text==0){
          return <div className="aa" onClick={this.click}>待回复<Icon type="mail" /></div>
      }
       else{
              return<span>已回复</span>
          }
      }
  }],
};
  export default function SatifyReducer(state = init_state3, action) {
    switch (action.type) {
      case ActionType:{
        const newState ={...state};
        return newState;
    }
        case ActionType.FETCH_SATIFY+"_SUC":
        const SatifytData ={...state};   
        console.log(action.data);      
        SatifytData.dataSource=action.data.data.list;
        // SatifytData.user1=[action.data.data.basic_info]
        // SatifytData.map1=[action.data.data.basic_info.real_reacher]
        return SatifytData;
default:
return state;
}
}