import * as ActionType from "../ActionType";
const init_state3 = {
  dataSource: []
};
  export default function SatifyReducer(state = init_state3, action) {

    switch (action.type) {
      case ActionType:{
        const newState ={...state};
        return newState;
    }
        case ActionType.FETCH_SATIFY+"_SUC":
        const SatifytData ={...state};   
        console.log(action.data);      
        SatifytData.dataSource=action.response.list;
        // SatifytData.user1=[action.data.data.basic_info]
        // SatifytData.map1=[action.data.data.basic_info.real_reacher]
        return SatifytData;
        case ActionType.CHANGE:
          const newChange={...state};
          newChange.dataSource[action.index].reply_status=1;
          return newChange
default:
return state;
}
}