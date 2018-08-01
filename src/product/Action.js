import axios from 'axios';
import * as ActionType from './ActionType';

export function fetchChanceStudentList(mid) {
  return {
    type: ActionType.FETCH_CHANCE_STUDENT_LIST,
    mid
  }
}

export function init_state1(text) {
  return {
    type: FETCH_MSG + "_SUC",
    text
  }
}
export function FETCH_USER(mid) {
  // console.log("that is ...")
  return {
    SERVER_API: {
      type: ActionType.FETCH_USER,
      url: "http://xly-wkop.xiaoniangao.cn/getUserInfo",
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
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
      url: ` http://xly-wkop.xiaoniangao.cn/getLessonInfo`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      params: {
        mid
      }
    }
  }
}
export function FETCH_XYDA(id) {
  return {
    SERVER_API: {
      type: ActionType.FETCH_XYDA,
      url: ` http://xly-wkop.xiaoniangao.cn/getStudentList`,
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
      url: ` http://xly-wkop.xiaoniangao.cn/getClassInfo`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      params: {
        id
      }
    }
  }
}