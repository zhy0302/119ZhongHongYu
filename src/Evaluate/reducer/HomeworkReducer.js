import React, { Component } from 'react';
import * as ActionType from "../../product/ActionType";
import { Icon, Popconfirm, message, Button, Popover } from 'antd';

//我的未点评
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