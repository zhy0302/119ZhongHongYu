import {
    CLICT_MORE,
    DELETE_BUTTON,
    TOP_BUTTON,
    MORE_DELETE,
    HANDLE_SHOWDIALOG,
    HANDER_ADD,
    CHECKED,
    DELETE_MORE_INDEX,
    DELETE_MORE,
    HANDLE_CLOSE
    } from "../../components/actionType";
    const init_state = {
          isDialog:false,
          index:null,
          isDialog1:false,
          deleteArr:[],
          checked:false,
          showcheck:false
          //dialog1:false
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
            case MORE_DELETE:{
                const newState ={...state};
                newState.showcheck = !action.text.showcheck;
                newState.index = action.text.index;
                newState.isDialog = action.text.isDialog;
                return newState;
            }
            case HANDLE_SHOWDIALOG:{      
                const newState ={...state}; 
                newState.isDialog1 = !action.text.isDialog1;
                return newState;
            }
            case DELETE_BUTTON:{
                const newState ={...state};
                newState.isDialog = action.text.isDialog;
                return newState;
            }
            case HANDER_ADD:{
                const newState ={...state};
                newState.isDialog1 = !action.text.isDialog1;
                //newState.index = action.text.index;
                return newState;
            }  
            case HANDLE_CLOSE:{
                const newState ={...state};
                newState.isDialog1 = !action.text.isDialog1;
                return newState;
            }
            case CHECKED:{
                const newState ={...state};
                newState.checked = !action.text.checked;
                newState.index = action.text.index;
                newState.deleteArr = action.text.deleteArr;
                return newState;
            }
            case DELETE_MORE_INDEX:{
                const newState ={...state};
                newState.showcheck = !action.text.showcheck;
                newState.deleteArr = action.text.deleteArr;
                
                return newState;
            }
            case DELETE_MORE:{
                const newState ={...state};
                newState.showcheck = !action.text.showcheck;
                return newState;
            }
            default:
                return state;
        }
    }