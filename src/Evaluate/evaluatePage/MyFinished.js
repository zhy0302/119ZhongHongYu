import React, { Component } from 'react';
import { Button, Input, Carousel, Table, List, Avatar } from 'antd';
import './Evapage.css'
export default class MyFinished extends Component {
    handerShowComment = () =>{
        const { state } = this.props;
        const list = state.HomeworkReducer;
        let newList;
        if (list){
            return newList = list.map(id => {
                const homeworkList = state.Entities.homeworkList[id];
                return (
                    <div >
                         <span>{homeworkList.comments.nick}mid:{homeworkList.comments.mid}</span>
                         <span className='commTime'>{homeworkList.comments.time}</span>
                         <p>{homeworkList.comments.content}</p>
                        </div>
                )
            })
        }
    }

    render() {
        return (
            <div>
                {
                    this.handerShowComment()
                }
            </div>   
        )
    }
}
