import React from 'react';
import {callDialog} from '../../action';
import{callDialog1} from'../../action';
import{callShowCheck}from'../../action';
import './Tab.css'

export default class Dialog extends React.Component {
    topButton = () =>{
        const {state,todoActions} = this.props;
        const copeMessages = state.messagesItem.messages.slice();
        const temp = copeMessages[state.controlDia.index];
        copeMessages.splice(state.controlDia.index,1)
        copeMessages.unshift(temp);
        todoActions.callDialog({
            messages:copeMessages,
            isDialog:!state.controlDia.isDialog
        })
    }
    deleteButton=()=>{
        const {state,todoActions} = this.props;
        const copeMessages = state.messagesItem.messages.slice();
        const temp = copeMessages[state.controlDia.index];
        copeMessages.splice(state.controlDia.index,1)
        todoActions.callDialog1({
            messages:copeMessages,
            isDialog:!state.controlDia.isDialog
        })
    }
    moreDelete=()=>{
        const {state,todoActions} = this.props;
        console.log(!state.controlDia.isDialog)
        todoActions.callShowCheck({
            showCheck:!state.controlDia.showcheck,
            isDialog: !state.controlDia.isDialog
        })
    }
    
    render() {
        const {state} = this.props;
        return state.controlDia.isDialog ? (
            <div className='content'onClick={this.handleClose} > 
                <ul className="cont">
                    <li className="item1"><button onClick={this.topButton}>置顶</button></li>
                    <li className="item1"><button onClick={this.deleteButton}>删除</button></li>
                    <li className><button onClick={this.moreDelete}>多选</button></li>
                </ul>
            </div>
        ) : null  
    }
}
