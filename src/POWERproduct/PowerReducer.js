import * as ActionType from "../product/ActionType";
import React, { Component } from 'react';
const init_state3 = {
    result:'101',
    user:[100101,100102],
    array:[],
    // deleteArr:[]
};
export default function PowerReducer(state = init_state3, action) {
    switch (action.type) {
     case ActionType.FETCH_ONSELECT:{
         return {
             ...state,
             user:action.item
         }
     }
     case ActionType.FETCH_ARRAY:{
        return {
            ...state,
            array:action.array
        }
    }
    case ActionType.FETCH_DELETE:{
        let newArr = state.array.slice();
        for(let i in action.deleteArr){
            let temp = newArr.indexOf(action.deleteArr[i]);
            newArr.splice(temp,1); 
        }
        return {
            ...state,
            array:newArr
        }
    }
    case ActionType.FETCH_SEARCH:{
        const temp = state.array.slice();
        const mid = parseFloat(action.mid);   
           console.log(action.mid)
        let newArr = []
        for(let i in temp){
            if(temp[i].mid === mid){
                newArr.push(temp[i])
            }
        }
  
        return {
            ...state,
            array:newArr
        }
        // return {
        //     ...state,
        //     array:action.array
        //}
    }

        default:
            return state;
    }
}