import React from 'react';
import './Style.css';
import './TodoStyle.css';
import icon3 from '../icon/search.png';
import icon4 from '../icon/add.png';
import icon6 from '../icon/smile.png';
import icon1 from '../icon/collect.png';
import icon2 from '../icon/photo.png';
// import addicon from'../icon/add.png';
export default class Filter extends React.Component{
    constructor(){
        super();
        } 
    render(){
        const {moreSeclet,onItemClick,handDelete}= this.props.state
        const messageViews=this.state.messages.map((item,index)=>{
          return<MessageItem 
          key={index} 
          item={item} 
          show1={onItemClick.bind(this,index)} //弹出框显示
          det={moreSeclet} //判断是否出现复选框
          delete={handDelete.bind(this,index)}/>
        });
        return messageViews;
      }
    }