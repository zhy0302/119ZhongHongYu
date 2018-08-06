import { combineReducers } from 'redux';
import * as ActionType from '../ActionType';
function classes(state = {}, action) {
    switch (action.type) {
        case `${ActionType.FETCH_MSG}_SUC`: {
            const entities = action.response.entities;
            return {
                ...state,
                ...entities.classes
            };
        }
        default:
            return state;
    }
    return state;
}
function teachers(state = {}, action) {
    switch (action.type) {
        case `${ActionType.FETCH_MSG}_SUC`: {
            const entities = action.response.entities
            return {
                ...state,
                ...entities.teachers
            };
        }
        default:
            return state;
    }
    return state;
}
function satisfied(state = {}, action) {
    switch (action.type) {
        case `${ActionType.FETCH_MSG}_SUC`: {
            const entities = action.response.entities
            return {
                ...state,
                ...entities.satisfiled
            };
        }
        // case `${ActionTypes.REPLY_USER_FEED_BACK}`: {
        //     const { time } = action.params
        //     const targetItem = { ...state[time] }
        //     targetItem.reply_status = 1
        //     const nextState = { ...state, [time]: targetItem }
        //     return nextState
        // }
        default:
            return state;
    }
    return state;
}
export default combineReducers({
    classes,
    teachers,
    satisfied
});