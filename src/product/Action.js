import axios from 'axios';
import * as ActionType from './ActionType';
import{normalize}from 'normalizr';
import  Schema from './reducer/Schema';
export function FETCH_SEARCH_LIST(mid) {
  return {
    type: ActionType.FETCH_SEARCH_LIST,
    mid
  }
}
export function FETCH_USER(mid) {
  return {
    SERVER_API: {
      type: ActionType.FETCH_USER,
       endpoint: '/getUserInfo',
      params: {
        mid
      }
    }
  }
}
export function FETCH_MSG(mid) {
  return {
    SERVER_API: {
      type: ActionType.FETCH_MSG,
      endpoint: '/getLessonInfo',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      params: {
        mid
      },
     normalizeFuc: json => {
       return {
         current: normalize(json.currentLessonsList, Schema.lessonListSchema),
         history: normalize(json.historyLessonsList, Schema.lessonListSchema)
       };
     }
    }
  }
}
export function FETCH_XYDA(id) {
  return {
    SERVER_API: {
      type: ActionType.FETCH_XYDA,
      endpoint: `/getStudentList`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      params: {
        id
      }
    }
  }
}
export function FETCH_CLASS(id) {
  return {
    SERVER_API: {
      type: ActionType.FETCH_CLASS,
      endpoint: `/getClassInfo`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      params: {
        id
      }
    }
  }
}
export function FETCH_SATIFY(mid) {
  return {
    SERVER_API: {
      type: ActionType.FETCH_SATIFY,
      endpoint: `/getSatisfiledList`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      params: {
        mid
      }
    },
    normailzerFuc:response=> normalize(response.data.list, Schema.SATISFILEDLIST)
  }
}
export function change(index){
return{
  type:ActionType.CHANGE,
  index
}  
}
