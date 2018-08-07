import React, { Component } from 'react';
import * as ActionType from "../ActionType";
import { Icon, Popconfirm, message, Button, Popover } from 'antd';


export default function HomeworkReducer(state = [], action) {
    switch (action.type) {
        case ActionType: {
            const newState = { ...state };
            return newState;
        }
        case`${ ActionType.FETCH_HOMEWORK }_SUC`: 
            return action.response.result;
        default:
            return state;
    }
}