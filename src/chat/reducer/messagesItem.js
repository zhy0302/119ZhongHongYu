import {
    CLICT_MORE,
    DELETE_BUTTON,
    TOP_BUTTON,
    HANDER_ADD,
    DELETE_MORE_INDEX,
    MORE_DELETE
    } from "../../components/actionType";
    import icon3 from '../../icon/smile.png';
    import icon1 from '../../icon/photo.png';
    import icon2 from '../../icon/collect.png';

    const init_state = {
        messages: [
            {
              icon: icon1,
              title: '小年糕',
              descript: 'hello 小年糕',
              time: '7-18 11:14'
            },
            {
              icon: icon2,
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
            case DELETE_MORE_INDEX:{
                const newState ={...state};
                let newMessage = state.messages.slice();
                newMessage = action.text.messages;
                newState.messages = newMessage
                return newState;
            }
            case HANDER_ADD:{
                const newState ={...state};
                let newMessage = state.messages.slice();
                newMessage = action.text.messages;
                newState.messages = newMessage
                return newState;
            }
            default:
                return state;
        }
    }