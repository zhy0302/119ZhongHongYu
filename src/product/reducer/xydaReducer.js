import * as ActionType from "../ActionType";
import React, { Component } from 'react';
const init_state2 = {
  dataSource2: {
    entities:{},
    result:[]
  },
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
        return action.response.result;

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