import {
    CLICT_MORE,
    DELETE_BUTTON,
    TOP_BUTTON,
    MORE_DELETE,
    HANDLE_SHOWDIALOG,
    HANDER_ADD
    } from "../const/actionType";
    import icon3 from '../icon/smile.png';
    import icon1 from '../icon/collect.png';
    import icon2 from '../icon/add.png';

    const init_state = {
        messages: [
            {
              icon: icon1,
              title: '小年糕',
              descript: 'hello 小年糕',
              time: '7-18 11:14'
            },
            {
              icon: icon1,
              title: '小板凳',
              descript: 'hello 小板凳',
              time: '7-18 11:15',
            },
            {
              icon: icon3,
              title: '小豆包',
              descript: 'hi 小豆包',
              time: '7-17 10:00',
            }
          ],
    }
    
    export default function reducerTodo(state = init_state, action) {
        switch (action.type) {
            case DELETE_BUTTON:{
                const newState ={...state};
                let newMessage = state.messages.slice();
                newMessage = action.text.messages;
                newState.messages = newMessage
                return newState;
            }
            case TOP_BUTTON:{
                const newState ={...state};
                let newMessage = state.messages.slice();
                newMessage = action.text.messages;
                newState.messages = newMessage
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