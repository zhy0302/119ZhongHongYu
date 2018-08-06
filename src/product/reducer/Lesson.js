import { combineReducers } from 'redux';
import * as ActionType from '../ActionType';
export default function lessons(state = {
    currentLessonIds: [],
    historyLessonIds: [],
    lessonEntities: {}
  }, action) {
    switch (action.type) {
      case `${ActionType.FETCH_MSG}_SUC`:
        console.log(action);
        return {
          ...state,
          lessonEntities: {
            ...state.lessonEntities,
            ...action.response.current.entities.lesson,
            ...action.response.history.entities.lesson
          },
          currentLessonIds: action.response.current.result,
          historyLessonIds: action.response.history.result,
        }
      default:
        return state;
    }
  }