import React from 'react';
import {callState1} from '../../action'
import './Tab.css'

export default class Middle extends React.Component {

    // checkBox = (index) => {
    //     const { state } = this.props;
    //     if (state.showcheck) {
    //         return (
    //             <input type="checkbox" onClick={this.checked.bind(this, index)}></input>
    //         )
    //     }
    // }
    // checked = (idx, event) => {
    //     // console.log(event.target.checked)
    //     const { state, calldelete } = this.props;
    //     if (!event.target.checked) {
    //         for (let i in state.deleteArr) {
    //             if (state.deleteArr[i] === idx) {
    //                 state.deleteArr.splice(i, 1)
    //             }
    //         }
    //     } else {
    //         state.deleteArr.push(idx);
    //     }
    //     calldelete({
    //         deleteArr: state.deleteArr
    //     })
    // }
    // x = (a, b) => {
    //     return b > a;
    // }
    // deleteMoreIndex = (index) => {
    //     const { state, calldelete1 } = this.props;
    //     state.deleteArr.sort(this.x);
    //     console.log(state.deleteArr)

    //     for (let i in state.deleteArr) {
    //         state.messages.splice(state.deleteArr[i], 1)
    //     }
    //     console.log(state.messages)
    //     calldelete1({
    //         messages: state.messages,
    //         deleteArr: null,
    //         showcheck: !state.showcheck
    //     })
    // }
    // deleteMore = () => {
    //     const { state } = this.props;
    //     if (state.showcheck) {
    //         return (
    //             <div>
    //                 <button onClick={this.deleteMoreIndex}>批量删除</button>
    //                 <button>取消</button>
    //             </div>
    //         )
    //     }
    // }

    renderItem = (index) => {
        const { state, todoActions } = this.props;   

        todoActions.callState1({
            dialog: !state.controlDia.isDialog,
            index: index
        })
    }

    renderListItem = () => {
        const { state } = this.props;
        return state.messagesItem.messages.map((item, index) => {
            return (
                <li className="chat-list__item" key={index}>
                    {/* {this.checkBox(index)} */}
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
        });
        return null;
    }
    render() {
        return (
            <div className='middle_cont'>
                <ul>
                    {this.renderListItem()}
                </ul>
                {/* {this.deleteMore()} */}
            </div>
        )

    }
}
