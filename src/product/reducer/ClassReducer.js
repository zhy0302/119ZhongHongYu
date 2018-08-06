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
//    columns3: [{
//     title: '课程内容',
//     dataIndex: 'course_name',
//     key: 'course_name',
//   }, {
//     title: '上课时间',
//     dataIndex: 'time',
//     key: 'time',
//   }, {
//     title: '上课情况',
//     dataIndex: 'enter_status',
//     key: 'enter_status',
//     render:(text)=>{
//       if(text==0){
//           return <div><Icon type="close" />
//           </div>
//       }
//           else if(text==1){
//               return <div><Icon type="check"/> </div>
//           }else{
//               return<div><Icon type="minus"/> </div>
//           }
//       }
//   },{
//     title: '上课提交情况',
//     dataIndex: 'homework_status',
//     key: 'homework_status',
//     render:(text)=>{
//       if(text==0){
//           return <div><Icon type="close" />
//           </div>
//       }
//           else if(text==1){
//               return <div><Icon type="check"/> </div>
//           }else{
//               return<div><Icon type="minus"/> </div>
//           }
//       }
//   },{
//     title: '被点评情况',
//     dataIndex: 'review_status',
//     key: 'review_status',
//     render:(text)=>{
//       if(text==0){
//           return <div><Icon type="close" />
//           </div>
//       }
//           else if(text==1){
//               return <div><Icon type="check"/> </div>
//           }else{
//               return<div><Icon type="minus"/> </div>
//           }
//       }
//   },{
//     title: '打卡情况',
//     dataIndex: 'clockin_status',
//     key: 'clockin_status',
//     render:(text)=>{
//       if(text==0){
//           return <div><Icon type="close" />
//           </div>
//       }
//           else if(text==1){
//               return <div><Icon type="check"/> </div>
//           }else{
//               return<div><Icon type="minus"/> </div>
//           }
//       }
//   },{
//     title: '满意度情况',
//     dataIndex: 'satisfied_score',
//     key: 'satisfied_score',
//     render:(text)=>{
//         if(text<5){
//             return <strong className="red">{text}</strong>
//         }else{
//                 return<span>{text}</span>
//             }
//         }
//   }],
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