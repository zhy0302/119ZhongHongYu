
import * as ActionType from "../ActionType";
const init_state = {
        img:{hurl:""},
        user:[{
        }],
        map:[{
            nick:'学员编号',
            learningLesson:'在学课程',
            tel:'手机号码',
            enterDate:'入学时间',
            totalLearningDays:'累计学习天数',
            weiChatCode:'微信号码',
            history_pay:'历史付费额',
            lastLoginDate:'最后登录时间',    
            tel:'手机号码',
            weiChatCode:'微信',
            remark:'备注',
        }],
        
};
 export default function HeaderReducer(state = init_state, action) {
            switch (action.type) {
                case ActionType:{
                    const newState ={...state};
                    return newState;
                }
                case ActionType.FETCH_USER+"_SUC":
                const userInfo ={...state};        
                userInfo.user=[action.data.data];
                //userInfo.map=[action.data.data];
                userInfo.img=action.data.data.hurl;
                console.log(action.data.data.hurl);
                return userInfo;
            default:
            return state;
            }
          }