import React, { Component } from 'react';
import { Button, Input, Carousel, Table, Switch, Avatar } from 'antd';
import './Evapage.css';
export default class Comments extends Component {
    ShowComment = () => {
        const { state } = this.props;
        const list1 = state.MyFinishedReducer;
        let newList;
        console.log(state.MyFinishedReducer)
        return newList = list1.map(idx => {
            //const comments =state.Entities.comments[state.Entities.homeworkList[idx]];
            const newComments = state.Entities.homeworkList[idx].comments.map(item => {
                return (
                    state.Entities.comments[item]
                )
            })
            
            console.log(newComments)
          return  newComments.map(item =>{
                console.log(item.nick)
                if (item.from=='author') {
                    return (
                        <div >
                            <span>{item.nick}mid:{item.mid}</span>
                            <span className='Time'>{item.time}</span>
                            <p>{item.content}</p>
                        </div>
                    )
                }
                else if (item.status == 'reject') {
                    return (
                        <div className='commment'>
                            <span>(点评老师:{item.nick})</span>
                            <span className='Time'>{item.time}</span>
                            <p>{item.content}</p>
                            <p className='back'>(消息被退回,退回原因:{item.reason})</p>
                        </div>
                    )
                } else if (item.status == 'unrevised') {
                    return (
                        <div className='commment'>
                            <span>(点评老师:{item.nick})</span>
                            <span className='Time'>{item.time}</span>
                            <p>{item.content}</p>
                        </div>
                    )
                }
            })
        })
    }
        
        render() {
            return (
                <div className="content_left">
                    {
                        this.ShowComment()
                    }
                </div>
            )
        }
    }
    