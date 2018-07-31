// import { combineReducers } from 'redux';
// import  TableReducer from './TableReducer';
// import  HeaderReducer from './HeaderReducer';

// export default combineReducers({
//     TableReducer,
//     HeaderReducer
// });


import React from 'react';
import * as ActionType from "../ActionType";
const init_state = {
    user:[{
        img:require('../Header/img/a.jpg'),
        classNum:'三班人',
        peopleNum:'MID33092018115',
        historyMoney:'987',
        phone:'15230529628',
        onTimeClass:'摄影课 绘画课',
        didStudy:'876天',
        weChatNum:'null',
        entTime:'2018-03-30',
        lastLogin:'2018-03-30',
        note:'null',
    }],
    map:[{
        peopleNum:'学员编号',
        onTimeClass:'在学课程',
        phone:'手机号码',
        historyMoney:'历史付费额',
        didStudy:'累计学习天数',
        lastLogin:'最后登录时间',
        entTime:'入学时间',
        weChatNum:'微信号码',
        note:'备注',
    }],
    dataSource : [{
        key: '1',
        class: '高级班',
        status: '进行中',
        time: '2017-04-20',
        teacher:'小白老师',
        classper:'3/21',
        zuoye:'67.98',
        dianping:'87.98%',
        daka:'3/21',
        satify:'90.14%'
    
      }, {
        key: '2',
        class: '进阶班',
        status: '进行中',
        time: '2017-04-21',
        teacher:'小白老师',
        classper:'20/21',
        zuoye:'76.89',
        dianping:'31.87',
        daka:'5/21',
        satify:'90.14%'
      },{
      key: '3',
      class: '提高班',
      status: '进行中',
      time: '2017-04-22',
      teacher:'小白老师',
      classper:'13/21',
        zuoye:'13.89',
        dianping:'21.76',
        daka:'13/21',
        satify:'88.01%'
    },{
      key: '4',
      class: '入门班',
      status: '进行中',
      time: '2017-04-23',
      teacher:'小白老师',
      classper:'20/21',
        zuoye:'98.45',
        dianping:'98.76',
        daka:'20/21',
        satify:'30.10'
    },{
      key: '5',
      class: '体验班',
      status: '已结束',
      time: '2017-04-24',
      teacher:'小白老师',
      classper:'21/21',
        zuoye:'98.45',
        dianping:'78.76',
        daka:'21/21',
        satify:'94.14%'
    }
    ],
      
       columns : [{
        title: '班级',
        dataIndex: 'class',
        key: 'class',
      }, {
        title: '课程状态',
        dataIndex: 'status',
        key: 'status',
      }, {
        title: '开课时间',
        dataIndex: 'time',
        key: 'time',
      },{
        title: '老师',
        dataIndex: 'teacher',
        key: 'teacher',
      },{
        title: '上课率',
        dataIndex: 'classper',
        key: 'classper',
        render:(text)=>{
            const splice=text.split('/');
            if(splice[0]/splice[1]>0.95){
                return <span className="orange">{text}</span>
            }
                else if(splice[0]/splice[1]<0.80){
                    return <span className="red">{text}</span>   
                }else{
                    return<span>{text}</span>
                }
            }
      },{
        title: '作业提交率',
        dataIndex: 'zuoye',
        key: 'zuoye',
        render:(text)=>{
            //console.log(text<0.80)
            if(text>95){
                return <span className="orange">{text+"%"}</span>
            }
                else if(text<80){
                    return <span className="red">{text+"%"}</span>   
                }else{
                    return<span>{text}</span>
                }
            }
      },{
        title: '被点评情况',
        dataIndex: 'dianping',
        key: 'dianping',
        render:(text)=>{
            if(text>95){
                return <span className="orange">{text+"%"}</span>
            }
                else if(text<80){
                    return <span className="red">{text+"%"}</span>   
                }else{
                    return<span>{text}</span>
                }
            }
      },{
        title: '打卡率',
        dataIndex: 'daka',
        key: 'daka',
        render:(text)=>{
            const splice=text.split('/');
            if(splice[0]/splice[1]>0.95){
                return <span className="orange">{text}</span>
            }
                else if(splice[0]/splice[1]<0.80){
                    return <span className="red">{text}</span>   
                }else{
                    return<span>{text}</span>
                }
            }
      },{
        title: '满意度',
        dataIndex: 'satify',
        key: 'satify',
        render:(text)=>{
            if(text>95){
                return <span className="orange">{text+"%"}</span>
            }
                else if(text<80){
                    return <span className="red">{text+"%"}</span>   
                }else{
                    return<span>{text}</span>
                }
            }
      }],
      dataSource1 : [{
        key: '1',
        class: '高级班',
        status: '已结束',
        time: '2017-04-20',
        classper:'3/21',
        zuoye:'5/21',
        dianping:'87.98%',
        daka:'3/21',
        satify:'90.14%'
      }], 
};
 export default function reducer(state = init_state, action) {
            switch (action.type) {
                case ActionType:{
                    const newState ={...state};
                    return newState;
                }
                case ActionType.FETCH_USER+"_SUC":
                    const userInfo ={...state}; 
                                console.log(currentLessonsList[1]);       
                    userInfo.map=action.data.data;

                    return userInfo;
                case ActionType.FETCH_MSG:
                    const msg ={...state};
                    console.log(action.data.data);
                    return msg;
            default:
            return state;
            }
          }
          
