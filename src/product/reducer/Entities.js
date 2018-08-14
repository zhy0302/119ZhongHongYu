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
        case `${ActionType.FETCH_MSG}_SUC`: {
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
        case `${ActionType.FETCH_MSG}_SUC`: {
            const entities = action.response.entities;
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
//满意度
function satisfied(state = {}, action) {
    switch (action.type) {
        case `${ActionType.FETCH_SATIFY}_SUC`: {
            const entities = action.response.entities
            //const result=action.response.result
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
        case `${ActionType.FETCH_HOMEWORK_ALLUNFINISHED}_SUC`:
        case `${ActionType.FETCH_HOMEWORK_ALLFINISHED}_SUC`:
        case `${ActionType.FETCH_HOMEWORK_MYFINISHED}_SUC`:
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
function basicInfo(state = {}, action) {
    switch (action.type) {
        case `${ActionType.FETCH_CLASS}_SUC`: {
            const entities = action.response.entities
            const result=action.response.result
            return {
                ...state,
                ...entities.basicInfo,
            };
        }
        default:
            return state;
    }
}
function comments(state = {}, action) {
    switch (action.type) {
        case `${ActionType.FETCH_HOMEWORK_ALLUNFINISHED}_SUC`:
        case `${ActionType.FETCH_HOMEWORK_ALLFINISHED}_SUC`:
        case `${ActionType.FETCH_HOMEWORK_MYFINISHED}_SUC`:
        case `${ActionType.FETCH_HOMEWORK}_SUC`: {
            const entities = action.response.entities
            const result=action.response.result
            return {
                ...state,
                ...entities.comments1,
            };
        }
        default:
            return state;
    }
}
function aa(state = {
    101:{
        id:101,
        name:'所有部门',
        child:[1001]
    },
    1001:{
        id:1001,
        name:'爱奇迪集团',
        user:[100101],
        child:[10001]
    },
    10001:{
        id:10001,
        name:'广州分会部',
        user:[100101,100102],
        child:[100001,100002,100003,100004]
    },
    100001:{
        id:100001,
        name:'总经办',
        user:[100103,100104],
        child:[]
    },
    100002:{
        id:100002,
        name:'财务部',
        user:[100105,100106],
        child:[]
    },
    100003:{
        id:100003,
        name:'工程部',
        user:[100107,100108],
        child:[]
    },
    100004:{
        id:100004,
        name:'产品研发部',
        user:[100101,100102,100103,100104,100105,100106,100107,100108,100109],
        child:[1000001,1000002,1000003]
    },
    1000001:{
        id:1000001,
        name:'开发一组',
        user:[100101,100102,100103],
        child:[]
    },
    1000002:{
        id:1000002,
        name:'开发二组',
        user:[100104,100105,100106],
        child:[]
    },
    1000003:{
        id:1000003,
        name:'测试组',
        user:[100107,100108,100109],
        child:[]
    },
}, action) {
    switch (action.type) {
        default:
            return state;
    }
}
function user(state = {
    100101:{
        mid:100101,
        name:'白帆',
       
    },
    100102:{
        mid:100102,
        name:'王鹏',       
    },
    100103:{
        mid:100103,
        name:'张杰',       
    },
    100104:{
        mid:100104,
        name:'李娜',       
    },
    100105:{
        mid:100105,
        name:'方明',       
    },
    100106:{
        mid:100106,
        name:'李健',       
    },
    100107:{
        mid:100107,
        name:'江萍',       
    },
    100108:{
        mid:100108,
        name:'郑好',       
    },
    100109:{
        mid:100109,
        name:'张娜',       
    },
}, action) {
    switch (action.type) {
       
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
    basicInfo,
    comments,
    aa,
    user
    
});