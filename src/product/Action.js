import axios from 'axios';
import * as ActionType from './ActionType';
import { normalize } from 'normalizr';
import * as schema from './reducer/Schema';
export function FETCH_SEARCH_LIST(mid) {
  return {
    type: ActionType.FETCH_SEARCH_LIST,
    mid
  }
}
//用户信息--HeaderReducer--Header.js
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
//课程信息--TableReducer--Table.js
export function FETCH_MSG(mid) {
  return {
    SERVER_API: {
      type: ActionType.FETCH_MSG,
      endpoint: '/getLessonInfo',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      params: {
        mid
      },
      normailzerFun: response => {
        console.log(response.currentLessonsList)
        const current = normalize(response.currentLessonsList, schema.CLASSINFO);
        const history = normalize(response.historyLessonsList, schema.CLASSINFO);
        return {
          current,
          history
        }
      }
    }
  }
}
//学员档案--xydaReducer--Table1.js
export function FETCH_XYDA(id) {
  return {
    SERVER_API: {
      type: ActionType.FETCH_XYDA,
      endpoint: `/getStudentList`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      params: {
        id
      },
      normailzerFun: response => {
        console.log(response)
        return normalize(response, schema.STUDENTLIST)
      }

    }
  }
}
//上课详情--ClassReducer--ClassTable.js
export function FETCH_CLASS(id) {
  return {
    SERVER_API: {
      type: ActionType.FETCH_CLASS,
      endpoint: `/getClassInfo`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      params: {
        id
      },
      normailzerFun: response => {
        console.log(response.list)
       // const list = normalize(response.list, schema.BASICINFO)
        // return {
        //   ...response.basic_info,
        //   list
        return normalize(response.list, schema.BASICINFO)
       // }
      }
    }
  }
}
//满意度--SatifyReducer--Tarbar.js满意度反馈表
export function FETCH_SATIFY(mid) {
  return {
    SERVER_API: {
      type: ActionType.FETCH_SATIFY,
      endpoint: `/getSatisfiledList`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      params: {
        mid
      },
      normailzerFun: response => {
        return normalize(response.list, schema.SATISFILEDLIST)
      }
    }
  }
}
//我的未点评
export function FETCH_HOMEWORK(token,isReviewed) {
  return {
    SERVER_API: {
      type: ActionType.FETCH_HOMEWORK,
      endpoint: `/getHomeWork`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      params: {
        token,
        isReviewed
      },
      normailzerFun: response => {
        return normalize(response, schema.HOMEWORKLIST)
      }
    }
  }
}
//我的点评历史
export function FETCH_HOMEWORK_MYFINISHED(token,isReviewed) {
  return {
    SERVER_API: {
      type: ActionType.FETCH_HOMEWORK_MYFINISHED,
      endpoint: `/getHomeWork`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      params: {
        token,
        isReviewed
      },
      normailzerFun: response => {
        return normalize(response, schema.HOMEWORKLIST)
      }
    }
  }
}
//全部点评
export function FETCH_HOMEWORK_ALLFINISHED(token,isReviewed) {
  return {
    SERVER_API: {
      type: ActionType.FETCH_HOMEWORK_ALLFINISHED,
      endpoint: `/getHomeWork`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      params: {
        token,
        isReviewed
      },
      normailzerFun: response => {
        return normalize(response, schema.HOMEWORKLIST)
      }
    }
  }
}
//全部未点评
export function FETCH_HOMEWORK_ALLUNFINISHED(token,isReviewed) {
  return {
    SERVER_API: {
      type: ActionType.FETCH_HOMEWORK_ALLUNFINISHED,
      endpoint: `/getHomeWork`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      params: {
        token,
        isReviewed
      },
      normailzerFun: response => {
        return normalize(response, schema.HOMEWORKLIST)
      }
    }
  }
}
export function change(index) {
  return {
    type: ActionType.CHANGE,
    index
  }
}
export function fetchonSelect(item){
  return{
    type:ActionType.FETCH_ONSELECT,
    item
  }
}
export function fetchArray(array){
  return{
    type:ActionType.FETCH_ARRAY,
    array
  }
}
export function fetchDelete(deleteArr){
  return{
    type:ActionType.FETCH_DELETE,
    deleteArr
  }
}


