import * as ActionType from "../ActionType";
import Entities from "./Entities";
const init_state3 = {
  dataSource: {
    entities:{},
    result:[]
  }
};
  export default function SatifyReducer(state = init_state3, action) {

    switch (action.type) {
      case ActionType:{
        const newState ={...state};
        return newState;
    }
        case ActionType.FETCH_SATIFY+"_SUC":
        const SatifytData ={...state};   
        SatifytData.dataSource=action.response;
        return SatifytData;

        case ActionType.CHANGE:
          const newChange={...state};
          newChange.dataSource[action.index].reply_status=1;        
          return newChange
default:
return state;
}
}