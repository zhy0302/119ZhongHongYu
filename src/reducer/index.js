import { combineReducers } from 'redux';
import  controlDia from './controlDia';
import  messagesItem from './messagesItem';

export default combineReducers({
    messagesItem,
    controlDia
});