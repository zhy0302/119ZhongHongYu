import React from 'react';
import {callState1} from '../container/Action'
import {calldelete }from '../container/Action'
import '../container/Style.css'

export default class TodoList extends React.Component {

    checkBox = (index) => {     //弹出勾选框
        const { state } = this.props;
        if (state.controlDia.showcheck) {
            return (
                <input type="checkbox" onClick={this.checked.bind(this, index)}></input>
            )
        }
    }
    checked = (idx, event) => {
        // console.log(event.target.checked)
        const { state} = this.props;
        if (!event.target.checked) {
            for (let i in state.controlDia.deleteArr) {
                if (state.controlDia.deleteArr[i] === idx) {
                    state.controlDia.deleteArr.splice(i, 1)
                }
            }
        } else {
            state.controlDia.deleteArr.push(idx);   
        }
    }
    x = (a, b) => {
        return b > a;
    }
    //    deleteArr = (item) =>{
    //     this.setState({
    //         deleteArr:item.deleteArr
    //     })
    // }
    deleteMoreIndex = (index) => {
      const {state, todoActions} = this.props; 
     // const { state, todoActions } = this.props;
        state.controlDia.deleteArr.sort(this.x);
       // console.log(state.deleteArr)
        for (let i in state.controlDia.deleteArr) {
            state.messagesItem.messages.splice(state.controlDia.deleteArr[i], 1)
        }
       // console.log(state.messages)
        todoActions.deleteArr({
            messages: state.messagesItem.messages,
            deleteArr: null,
            showcheck: !state.controlDia.showcheck
        })
    }
    deleteMore = () => {
        const { state } = this.props;
        if (state.controlDia.showcheck) {
            return (
                <div className="moredelete">
                    <button onClick={this.deleteMoreIndex}>批量删除</button>
                    <button>取消</button>
                </div>
            )
        }
    }

    renderItem = (index) => {
        const { state, todoActions } = this.props;   
        todoActions.callState1({
            dialog: !state.controlDia.isDialog,
            index: index
        })
    }

    renderListItem = () => {
        const { state } = this.props;
        return (state.messagesItem.messages.map((item, index) => {  
           // {this.deleteMore()}
            return (             
                <li className="chat-list__item" key={index}>
                     {this.checkBox(index)}
                    <img className="chat-list__item__avatar" src={item.icon} alt="" />
                    <div className="chat-list__item__content">
                        <div className="chat-list__item__content__topBar">
                            <h2 className="chat-list__item__content__title">{item.title}</h2>
                            <div className="chat-list__item__content__time">{item.time}</div>
                        </div>
                        <div className="chat-list__item__content__recentMsg">{item.descript}</div>
                        <div className="chat-list__item__content__more" onClick={this.renderItem.bind(this, index)}>更多</div>
                    </div>
                </li> 
            )
        }));
        return null;
    }
    render() {
        return (
            <div className='middle_cont'>
            
                <ul>
                    {this.renderListItem()}
                </ul>
                 {this.deleteMore()}
            </div>
        )

    }
}
