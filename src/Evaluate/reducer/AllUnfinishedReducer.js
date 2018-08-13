import React, { Component } from 'react';
import * as ActionType from "../../product/ActionType";
import { Icon, Popconfirm, message, Button, Popover } from 'antd';


export default function AllUnfinishedReducer(state = [], action) {
    switch (action.type) {
        case ActionType: {
            const newState = { ...state };
            return newState;
        }
        case`${ ActionType.FETCH_HOMEWORK_ALLUNFINISHED }_SUC`: 
        console.log(action.response.result)
            return action.response.result;
        default:
            return state;
    }
}