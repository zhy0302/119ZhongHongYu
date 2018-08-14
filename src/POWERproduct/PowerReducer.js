import * as ActionType from "../product/ActionType";
import React, { Component } from 'react';
const init_state3 = {
    result:'101',
    user:[100101,100102],
    array:[],
    deleteArr:[]
};
export default function PowerReducer(state = init_state3, action) {
    switch (action.type) {
     case ActionType.FETCH_ONSELECT:{
         console.log(action.item)
         return {
             ...state,
             user:action.item
         }
     }
     case ActionType.FETCH_ARRAY:{
        console.log(action.array)
        return {
            ...state,
            array:action.array
        }
    }
    case ActionType.FETCH_DELETE:{
        return {
            ...state,
            deleteArr:action.deleteArr
        }
    }

        default:
            return state;
    }
}