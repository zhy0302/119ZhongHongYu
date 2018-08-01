import * as ActionType from "../ActionType";
import React, { Component } from 'react';
const init_state3 = {
  dataSource3: [{
    key: '0',
    nick: '高级班',
    mid: '进行中',
    enter_time: '2017-04-20',
    teachers:'小白老师',
    start_time:'3/21',
    learning_lessons:'67.98'
  }, {
    key: '1',
    nick: '进阶班',
    mid: '进行中',
    enter_time: '2017-04-21',
    teachers:'小白老师',
    start_time:'20/21',
    learning_lessons:'76.89',
},
{
  key: '1',
  nick: '进阶班',
  mid: '进行中',
  enterDate: '2017-04-21',
  teachers:'小白老师',
  startTime:'20/21',
  learning_lessons:'76.89',
}
],
   columns3: [{
    title: '学员名',
    dataIndex: 'nick',
    key: 'nick',
  }, {
    title: '学员编号',
    dataIndex: 'mid',
    key: 'mid',
  }, {
    title: '入学时间',
    dataIndex: 'enter_time',
    key: 'enter_time',
  },{
    title: '开课时间',
    dataIndex: 'start_time',
    key: 'start_time',
  },{
    title: '在学课程',
    dataIndex: 'learning_lessons',
    key: 'learning_lessons',
  },{
    title: '负责老师',
    dataIndex: 'teachers',
    key: 'teachers',
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
        ClasstData.dataSource3=action.data.data.basic_info;
        console.log(action.data.data.basic_info);
        return ClasstData;
default:
return state;
}
}