import { combineReducers } from 'redux';
import  TableReducer from './TableReducer';
import  HeaderReducer from './HeaderReducer';
import  xydaReducer from './xydaReducer';
import ClassReducer from './ClassReducer';
import SatifyReducer from './SatifyReducer';
import Entities from './Entities';
import HomeworkReducer from '../../Evaluate/reducer/HomeworkReducer';
import MyFinishedReducer from '../../Evaluate/reducer/MyFinishedReducer';
import AllFinishedReducer from '../../Evaluate/reducer/AllFinishedReducer';
import AllUnfinishedReducer from '../../Evaluate/reducer/AllUnfinishedReducer'
//import PowerReducer from '../../POWERproduct/PowerReducer'
export default combineReducers({
    Entities,
    TableReducer,
    HeaderReducer,
    xydaReducer,
    ClassReducer,
    SatifyReducer,
    HomeworkReducer,
    MyFinishedReducer,
    AllFinishedReducer,
    AllUnfinishedReducer,
   // PowerReducer

});


{/*import React from 'react';
import * as ActionType from "../ActionType";
const init_state = {
    user:[{
        img:require('../Header/img/a.jpg'),
        classNum:'三班人',
        nick:'MID33092018115',
        history_pay:'987',
        tel:'15230529628',
        learningLesson:'摄影课 绘画课',
        totalLearningDays:'876天',
        weiChatCode:'null',
        enterDate:'2018-03-30',
        lastLoginDate:'2018-03-30',
        remark:'null',
    }],
    map:[{
        nick:'学员编号',
        learningLesson:'在学课程',
        tel:'手机号码',
        history_pay:'历史付费额',
        totalLearningDays:'累计学习天数',
        lastLoginDate:'最后登录时间',
        enterDate:'入学时间',
        weiChatCode:'微信号码',
       remark:'备注',
    }],
    dataSource : [{
        key: '1',
        classInfo: '高级班',
        status: '进行中',
        startTime: '2017-04-20',
        teacherInfo:'小白老师',
        enterRate:'3/21',
        homeworkSubmitRate:'67.98',
        beCommenttedRate:'87.98%',
        signRate:'3/21',
        satisfyRate:'90.14%'
      }, {
        key: '2',
        classInfo: '进阶班',
        status: '进行中',
        startTime: '2017-04-21',
        teacherInfo:'小白老师',
        enterRate:'20/21',
        homeworkSubmitRate:'76.89',
        beCommenttedRate:'31.87',
        signRate:'5/21',
        satisfyRate:'90.14%'
    }
    ],
      
       columns : [{
        title: '班级',
        dataIndex: 'classInfo.name',
        key: 'classInfo.id',
      }, {
        title: '课程状态',
        dataIndex: 'status',
        key: 'status',
      }, {
        title: '开课时间',
        dataIndex: 'startTime',
        key: 'startTime',
      },{
        title: '老师',
        dataIndex: 'teacherInfo.nick',
        key: 'teacherInfo.id',
      },{
        title: '上课率',
        dataIndex: 'enterRate',
        key: 'enterRate',
        render:(text)=>{
            if(!text) return
            const num1=text.split('/')[0];
            const num2=text.split('/')[1];
            const num=(num1/num2).toFixed(3);
            if(num>0.95){
                return <span className="orange">{text}</span>
            }
                else if(num<0.80){
                    return <span className="red">{text}</span>   
                }else{
                    return<span>{text}</span>
                }
            }
      },{
        title: '作业提交率',
        dataIndex: 'homeworkSubmitRate',
        key: 'homeworkSubmitRate',
        render:(text)=>{
            if(text>0.95){
                return <span className="orange">{text+"%"}</span>
            }
                else if(text<0.80){
                    return <span className="red">{text+"%"}</span>   
                }else{
                    return<span>{text}</span>
                }
            }
      },{
        title: '被点评情况',
        dataIndex: 'beCommenttedRate',
        key: 'beCommenttedRate',
        render:(text)=>{
            if(text>0.95){
                return <span className="orange">{text+"%"}</span>
            }
                else if(text<0.80){
                    return <span className="red">{text+"%"}</span>   
                }else{
                    return<span>{text}</span>
                }
            }
      },{
        title: '打卡率',
        dataIndex: 'signRate',
        key: 'signRate',
         render:(text)=>{
            const num1=text.split('/')[0];
            const num2=text.split('/')[1];
            const num=(num1/num2).toFixed(3);
            if(num>0.95){
                return <span className="orange">{text}</span>
            }
                else if(num<0.80){
                    return <span className="red">{text}</span>   
                }else{
                    return<span>{text}</span>
                }
            }
      },{
        title: '满意度',
        dataIndex: 'satisfyRate',
        key: 'satisfyRate',
        render:(text)=>{
            if(text>0.95){
                return <span className="orange">{text+"%"}</span>
            }
                else if(text<0.80){
                    return <span className="red">{text+"%"}</span>   
                }else{
                    return<span>{text}</span>
                }
            }
      }],
      dataSource1 : [{
        key: '1',
        classInfo: '高级班',
        status: '已结束',
        startTime: '2017-04-20',
        teacherInfo:'小白老师',
        enterRate:'3/21',
        homeworkSubmitRate:'5/21',
        beCommenttedRate:'87.98%',
        signRate:'3/21',
        satisfyRate:'90.14%'
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
                    userInfo.user=[action.data.data];
                    //userInfo.map=[action.data.data];
                    console.log(action.data)

                    return userInfo;
                case ActionType.FETCH_MSG+"_SUC":
                    const msg ={...state};
                     console.log(action.data.data);
                    console.log(msg.dataSource1)
                    msg.dataSource=action.data.data.currentLessonsList;
                    msg.dataSource1=action.data.data.historyLessonsList;
                    return msg;
            default:
            return state;
            }
          }*/}
          
