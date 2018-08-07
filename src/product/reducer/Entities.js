import { combineReducers } from 'redux';
import * as ActionType from '../ActionType';
function classes(state = {}, action) {
    switch (action.type) {
        case `${ActionType.FETCH_SATIFY}_SUC`: {
            const entities = action.response.entities;
            return {
                ...state,
                ...entities.classes
            };
        }
        case `${ActionType.FETCH_HOMEWORK}_SUC`: {
            const entities = action.response.entities
            return {
                ...state,
                ...entities.classes,
            };
        }
        default:
            return state;
    }
}
function teacher(state = {}, action) {
    switch (action.type) {
        case `${ActionType.FETCH_SATIFY}_SUC`: {
            const entities = action.response.entities
            return {
                ...state,
                ...entities.teacher
            };
        }
        case `${ActionType.FETCH_HOMEWORK}_SUC`: {
            const entities = action.response.entities
            return {
                ...state,
                ...entities.teacher,
            };
        }
        default:
            return state;
    }
}
function satisfied(state = {}, action) {
    switch (action.type) {
        case `${ActionType.FETCH_SATIFY}_SUC`: {
            const entities = action.response.entities
            return {
                ...state,
                ...entities.satisfiled
            };
        }
        default:
            return state;
    }
}

function classInfo(state = {}, action) {
    switch (action.type) {
        case `${ActionType.FETCH_MSG}_SUC`: {
            const currentEntities = action.response.current.entities
            const historyEntities = action.response.history.entities
            return {
                ...state,
                ...currentEntities.classes,
                ...historyEntities.classes
            };
        }
        default:
            return state;
    }
}

function studentList(state = {}, action) {
    switch (action.type) {
        case `${ActionType.FETCH_XYDA}_SUC`: {
            const entities = action.response.entities
            return {
                ...state,
                ...entities.studentList
            };
        }
        default:
            return state;
    }
}
function homeworkList(state = {}, action) {
    switch (action.type) {
        case `${ActionType.FETCH_HOMEWORK}_SUC`: {
            const entities = action.response.entities
            const result=action.response.result
            return {
                ...state,
                ...entities.homeworkList,
            };
        }
        default:
            return state;
    }
}

export default combineReducers({
    classes,
    teacher,
    satisfied,
    classInfo,
    studentList,
    homeworkList,

});