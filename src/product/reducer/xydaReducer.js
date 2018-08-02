import * as ActionType from "../ActionType";
import React, { Component } from 'react';
const init_state2 = {
  dataSource2: [{
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
  key: '3',
  nick: '进阶班',
  mid: '进行中',
  enter_time: '2017-04-21',
  teachers:'小白老师',
  start_time:'20/21',
  learning_lessons:'76.89',
},
{
  key: '4',
  nick: '进阶班',
  mid: '进行中',
  enter_time: '2017-04-21',
  teachers:'小白老师',
  start_time:'20/21',
  learning_lessons:'76.89',
},
{
  key: '5',
  nick: '进阶班',
  mid: '进行中',
  enter_time: '2017-04-21',
  teachers:'小白老师',
  start_time:'20/21',
  learning_lessons:'76.89',
},
],
   columns2: [{
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
  export default function xydaReducer(state = init_state2, action) {
    switch (action.type) {
      case ActionType:{
        const newState ={...state};
        return newState;
    }
        case ActionType.FETCH_XYDA+"_SUC":
        const StudentData ={...state};        
        StudentData.dataSource2=action.data.data;
        console.log(action.data.data);
        return StudentData;

        case  ActionType.FETCH_SEARCH_LIST:
        const SearchState = {...state};
        const temp = SearchState.dataSource2.slice();
        const mid = parseFloat(action.mid);
        let newArr = []
        for(let i in temp){
            if(temp[i].mid === mid){
                newArr.push(temp[i])
            }
        }
        SearchState.dataSource2 = newArr;
        return SearchState;
default:
return state;
}
}