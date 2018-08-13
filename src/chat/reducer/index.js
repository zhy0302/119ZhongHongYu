import { combineReducers } from 'redux';
import  controlDia from '../../components/reducer/controlDia';
import  messagesItem from '../../components/reducer/messagesItem';

export default combineReducers({
    messagesItem,
    controlDia
});