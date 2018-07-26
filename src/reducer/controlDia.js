import {
    CLICT_MORE,
    DELETE_BUTTON,
    TOP_BUTTON,
    MORE_DELETE,
    HANDLE_SHOWDIALOG,
    HANDER_ADD
    } from "../const/actionType";
    const init_state = {
          isDialog:false,
          index:null,
          isDialog1:false,
    }
    
    export default function reducerTodo(state = init_state, action) {
        switch (action.type) {
            case CLICT_MORE: {
                const newState = {...state};
                newState.isDialog = !action.text.isDialog;
                newState.index = action.text.index;
                return newState;
            }
            case TOP_BUTTON:{
                const newState = {...state};
                newState.isDialog = action.text.isDialog;
                return newState;
            }
            // case MORE_DELETE:{
            //     const newState ={...state};
            //     newState.showcheck = !action.text.showcheck;
            //     newState.index = action.text.index;
            //     return newState;
            // }
            case HANDLE_SHOWDIALOG:{
                const newState ={...state};
                newState.dialog1 = !action.text.dialog1;
                //newState.index = action.text.index;
                return newState;
            }
            // case HANDER_ADD:{
            //     const newState ={...state};
            //     newState.dialog1 = !action.text.dialog1;
            //     //newState.index = action.text.index;
            //     return newState;
            // }
            default:
                return state;
        }
    }