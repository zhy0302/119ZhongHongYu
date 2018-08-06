import * as ActionType from "../ActionType";
import React, { Component } from 'react';
import { Icon, Popconfirm, message, Button, Popover } from 'antd';
const init_state1 = {
    dataSource: [],
    dataSource1: [],
};
export default function TableReducer(state = init_state1, action) {
    switch (action.type) {
        case ActionType: {
            const newState = { ...state };
            return newState;
        }
        case`${ ActionType.FETCH_MSG }_SUC`:
            const msg = { ...state };
            // console.log(action.response);
            // console.log(msg.dataSource1)
            msg.dataSource = action.response.currentLessonsList;
            msg.dataSource1 = action.response.historyLessonsList;
            return msg;
        default:
            return state;
    }
}

