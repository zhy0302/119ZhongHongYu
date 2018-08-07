import React, { Component } from 'react';
import { Button, Input, Carousel, Table, Switch, Avatar } from 'antd';
import '../evaluatePage/Evapage.css';
const icon = require('../../icon/smile.png');
//import { Col,Row } from 'antd/lib/grid';
export default class MyUnfinshed extends Component {
    showDiv = () =>{
        const { state } = this.props;
        const list = state.HomeworkReducer;
        let newList;
        if (list) {
            return newList = list.map(id => {
                const homeworkList = state.Entities.homeworkList[id];
                return (
                    <div >
                            {
                                this.imgShow(homeworkList.photos)
                            }
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
                )
            })
        }
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
            <div className="content_left">
                {
                    this.showDiv()
                }
            </div>
        )
    }
}
