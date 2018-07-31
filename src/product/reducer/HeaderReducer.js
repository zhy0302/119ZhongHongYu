
import * as ActionType from "../ActionType";
const init_state = {
    user:[{
        img:require('../Header/img/a.jpg'),
        classNum:'三班人',
        peopleNum:'MID33092018115',
        historyMoney:'987',
        phone:'15230529628',
        onTimeClass:'摄影课 绘画课',
        didStudy:'876天',
        weChatNum:'null',
        entTime:'2018-03-30',
        lastLogin:'2018-03-30',
        note:'null',
    }],
    map:[{
        peopleNum:'学员编号',
        onTimeClass:'在学课程',
        phone:'手机号码',
        historyMoney:'历史付费额',
        didStudy:'累计学习天数',
        lastLogin:'最后登录时间',
        entTime:'入学时间',
        weChatNum:'微信号码',
        note:'备注',
    }],

};
 export default function HeaderReducer(state = init_state, action) {
            switch (action.type) {
                case ActionType:{
                    const newState ={...state};
                    return newState;
                }
            default:
            return state;
            }
          }