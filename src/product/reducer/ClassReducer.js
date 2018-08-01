import * as ActionType from "../ActionType";
import React, { Component } from 'react';
import { Icon} from 'antd'
import icon1 from '../ClassTable/img/duihao.png';
import icon2 from '../ClassTable/img/duihao.png';
const init_state3 = {
  icon:[{
     icon1,
     icon2
  }],
  dataSource3: [{
    key: '0',
    course_name: '高级班',
    time: '进行中',
    enter_status: '2017-04-20',
    homework_status:'3/21',
    review_status:'67.98',
    clockin_status:'3/21',
    satisfied_score:'67.98'
  }, {
    key: '1',
    course_name: '高级班',
    time: '进行中',
    enter_status: '2017-04-20',
    homework_status:'3/21',
    review_status:'67.98',
    clockin_status:'3/21',
    satisfied_score:'67.98'
  },
{ key: '2',
  course_name: '1',
  time: '2017-04-21',
  enter_status:'小白老师',
  homework_status:'20/21',
  review_status:'76.89',
  clockin_status:'3/21',
    satisfied_score:'67.98'
}],
   columns3: [{
    title: '课程内容',
    dataIndex: 'course_name',
    key: 'course_name',
  }, {
    title: '上课时间',
    dataIndex: 'time',
    key: 'time',
  }, {
    title: '上课情况',
    dataIndex: 'enter_status',
    key: 'enter_status',
    render:(text)=>{
      if(text==0){
          return <div><Icon type="close" />
          </div>
      }
          else if(text==1){
              return <div><Icon type="check"/> </div>
          }else{
              return<div><Icon type="minus"/> </div>
          }
      }
  },{
    title: '上课提交情况',
    dataIndex: 'homework_status',
    key: 'homework_status',
    render:(text)=>{
      if(text==0){
          return <div><Icon type="close" />
          </div>
      }
          else if(text==1){
              return <div><Icon type="check"/> </div>
          }else{
              return<div><Icon type="minus"/> </div>
          }
      }
  },{
    title: '被点评情况',
    dataIndex: 'review_status',
    key: 'review_status',
    render:(text)=>{
      if(text==0){
          return <div><Icon type="close" />
          </div>
      }
          else if(text==1){
              return <div><Icon type="check"/> </div>
          }else{
              return<div><Icon type="minus"/> </div>
          }
      }
  },{
    title: '打卡情况',
    dataIndex: 'clockin_status',
    key: 'clockin_status',
    render:(text)=>{
      if(text==0){
          return <div><Icon type="close" />
          </div>
      }
          else if(text==1){
              return <div><Icon type="check"/> </div>
          }else{
              return<div><Icon type="minus"/> </div>
          }
      }
  },{
    title: '满意度情况',
    dataIndex: 'satisfied_score',
    key: 'satisfied_score',
    render:(text)=>{
      if(text==0){
          return <div><Icon type="close" />
          </div>
      }
          else if(text==1){
              return <div><Icon type="check"/> </div>
          }else{
              return<div><Icon type="minus"/> </div>
          }
      }
  }],

};
  export default function ClassReducer(state = init_state3, action) {
    switch (action.type) {
      case ActionType:{
        const newState ={...state};
        return newState;
    }
        case ActionType.FETCH_CLASS+"_SUC":
        const ClasstData ={...state};   
        console.log(action.data.data.list);      
        ClasstData.dataSource3=action.data.data.list;
       
        return ClasstData;
default:
return state;
}
}