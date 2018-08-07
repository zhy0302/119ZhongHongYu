import * as ActionType from "../ActionType";
import React, { Component } from 'react';
import { Icon} from 'antd'
import icon1 from '../ClassTable/img/duihao.png';
import icon2 from '../ClassTable/img/duihao.png';
const init_state3 = {
  dataSource3: {
      list:{},
      real_teacher:{},
      virtual_teacher:{}
  }
};
  export default function ClassReducer(state = init_state3, action) {
    switch (action.type) {
      case ActionType:{
        const newState ={...state};
        return newState;
    }
        case ActionType.FETCH_CLASS+"_SUC":
        const ClasstData ={...state};   
        console.log(action)    
        ClasstData.dataSource3=action.response;
        // ClasstData.user1=[action.data.data.basic_info]
        // ClasstData.map1=[action.data.data.basic_info.real_reacher]
        console.log(ClasstData) 
        return ClasstData;
default:
return state;
}
}