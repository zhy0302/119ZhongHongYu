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
        console.log(response)
        const list = normalize(response.list, schema.BASICINFO)
        return {
          ...response.basic_info,
          list
        }
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
      },
      normailzerFun: response => {
        console.log(response)
        return normalize(response.list, schema.SATISFILEDLIST)
      }
    }
  }
}

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
        console.log(response)
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
