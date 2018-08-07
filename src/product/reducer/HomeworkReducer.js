import React, { Component } from 'react';
import * as ActionType from "../ActionType";
import { Icon, Popconfirm, message, Button, Popover } from 'antd';
const init_state4 = {
    img:{photos:""},
    dataSource: {
        entities:{
            // homeworkList:{
            //     author:{},
            //     classInfo:{},
            //     teacherInfo:{},
            //     photos:[],
            }
        },
        result:[],
    //    map:[{
    //     id:'',
    //     // photos:'',
    //     description:'作业',
    //     tel:'mid',
    //     name:'',
    //     commentator:'点评人',
    //     totalLearningDays:'提交时间',
    // }],
};

export default function HomeworkReducer(state = init_state4, action) {
    switch (action.type) {
        case ActionType: {
            const newState = { ...state };
            return newState;
        }
        case`${ ActionType.FETCH_HOMEWORK }_SUC`:
            const homework= { ...state };
             console.log(action.response);
             homework.dataSource=action.response; 
             homework.img=action.response.dataSource.entities.homeworkList.photos;
             console.log(homework) 
            return homework;
        default:
            return state;
    }
}