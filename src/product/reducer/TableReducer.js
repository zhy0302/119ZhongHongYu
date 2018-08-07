import * as ActionType from "../ActionType";
import React, { Component } from 'react';
import { Icon, Popconfirm, message, Button, Popover } from 'antd';
const init_state1 = {
    dataSource1: {
        current:{
            entities:{
                classInfo:{},
                classes:{},
                teachers:{}
            },
            result:[]
        },
},
    dataSource2: {
        history:{
            entities:{},
            result:[]
        }
    }
};
export default function TableReducer(state = init_state1, action) {
    switch (action.type) {
        case ActionType: {
            const newState = { ...state };
            return newState;
        }
        case`${ ActionType.FETCH_MSG }_SUC`:
            const msg = { ...state };
             console.log(action.response.current);
            // console.log(msg.dataSource1)
            msg.dataSource1 = action.response.current;
            msg.dataSource2 = action.response.history;
            return msg;
        default:
            return state;
    }
}

