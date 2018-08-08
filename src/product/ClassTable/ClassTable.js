import React, { Component } from 'react';
import{Icon,Table,Button} from 'antd';
import'./ClassTable.css';
import { browserHistory } from 'react-router'
export default class ClassTable extends Component {
  constructor() {
    super();
}
handleReturn= () => {
    browserHistory.goBack()
    console.log(browserHistory.goBack)
  }
    render() {
    const columns3 =[
        {
        title: '课程内容',
        dataIndex: 'course_name',
        key: 'course_name',
      },{
        title: '上课时间',
        dataIndex: 'time',
        key: 'time',
      },{
        title: '上课情况',
        dataIndex: 'enter_status',
        key: 'enter_status',
        render:(text)=>{
          if(text==0){
              return <div><Icon type="close" />
              </div>
          }
              else if(text==1){
                  return <div><Icon type="check"/> </div>
              }else{
                  return<div><Icon type="minus"/> </div>
              }
          }
      },{
        title: '上课提交情况',
        dataIndex: 'homework_status',
        key: 'homework_status',
        render:(text)=>{
          if(text==0){
              return <div><Icon type="close" />
              </div>
          }
              else if(text==1){
                  return <div><Icon type="check"/> </div>
              }else{
                  return<div><Icon type="minus"/> </div>
              }
          }
      },{
        title: '被点评情况',
        dataIndex: 'review_status',
        key: 'review_status',
        render:(text)=>{
          if(text==0){
              return <div><Icon type="close" />
              </div>
          }
              else if(text==1){
                  return <div><Icon type="check"/> </div>
              }else{
                  return<div><Icon type="minus"/> </div>
              }
          }
      },{
        title: '打卡情况',
        dataIndex: 'clockin_status',
        key: 'clockin_status',
        render:(text)=>{
          if(text==0){
              return <div><Icon type="close" />
              </div>
          }
              else if(text==1){
                  return <div><Icon type="check"/> </div>
              }else{
                  return<div><Icon type="minus"/> </div>
              }
          }
      },{
        title: '满意度情况',
        dataIndex: 'satisfied_score',
        key: 'satisfied_score',
        render:(text)=>{
            if(text<5){
                return <strong className="red">{text}</strong>
            }else{
                    return<span>{text}</span>
                }
            }
      }
    ]
    const {state} = this.props;
    const list = state.ClassReducer.dataSource3;
    let newList;
    console.log(list)
    if(list.list.result){
        newList = list.list.result.map(t =>{
            return list.list.entities.basicInfo[t];
        })
    }
      return ( 
        <div>
             <div>
            <button onClick={this.handleReturn} >返回</button>
          </div>
        <div className="Classtable">
        <Table dataSource={newList} columns={columns3}/>
          </div>
          </div>
      );
    }
  }