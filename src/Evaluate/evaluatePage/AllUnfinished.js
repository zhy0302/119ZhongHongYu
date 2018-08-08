import React, { Component } from 'react';
import { Button, Input, Carousel, Table, Switch, Avatar } from 'antd';
import './Evapage.css';
const icon = require('../../icon/smile.png');
//import { Col,Row } from 'antd/lib/grid';
export default class AllUnfinished extends Component {
    showDiv = () =>{
        const { state } = this.props;
        const list = state.AllUnfinishedReducer;
        let newList;
        if (list) {
            return newList = list.map(id => {
                const homeworkList = state.Entities.homeworkList[id];
                //console.log(homeworkList.comments)
                return (
                    <div >
                        <div className="content_left">
                        <Carousel autoplay>
                            {
                                this.imgShow(homeworkList.photos)
                            }
                          </Carousel>  
                        <div>
                        <span>No.{homeworkList.id}</span>
                        <span>作业：{homeworkList.description}</span>
                         <span>
                             {state.Entities.classes[homeworkList.classInfo].name} 
                         </span>
                         <span>
                             {state.Entities.teacher[homeworkList.teacherInfo].nick}
                         </span><br/>
                        <span>点评人：{homeworkList.commentator}</span>
                        <span>
                             提交时间:{homeworkList.time}
                         </span>
                         <div className='authorContent'>
                        佳作:<Switch defaultChecked onChange={this.onChange} />
                         </div>
                         </div>
                         <div classNmae='submit'>
                               <div className='submitInput'>
                              <Input placeholder="Basic usage" />
                              </div>
                             <Button  className=''>提交</Button>
                        </div> 
                         </div>
                    </div>
                )
            })
        }
    }
    ShowComment = () => {
        const { state } = this.props;
        const list1 = state.AllUnfinishedReducer;
        let newList;
        console.log(state.AllUnfinishedReducer)
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

    imgShow = (item) =>{
        return item.map(idx =>{
            return (
                <img src={idx} />
            )
        })
    }

    render() {     
        return (
            <div>
            <div className="content_left">
                {this.showDiv() }
            </div>
             <div className="content_right">
            {this.ShowComment()}
            </div>
        </div>
        )
    }
}
