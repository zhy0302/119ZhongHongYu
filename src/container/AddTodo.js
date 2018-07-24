{/*import React from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import  Todo from'./Todo.js';
import './Style.css';
import './TodoStyle.css';
import icon5 from '../icon/tianjia.jpg';
import icon from '../icon/smile.png';
import icon3 from '../icon/search.png';
import icon4 from '../icon/add.png';
//const {addicon} = require('../icon/add.png')
//const searchImg = require('../../img/red_add.png')
export default class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showDialog:false,
            message:{
              descript:null,
              time:null,
              title:null
            }
        }
    }
    //DalogView当前状态
    handleShowDialog = ()=> {
        this.setState({showDialog: !this.state.showDialog,});
      }
      showTitle=(e)=>{
       // console.log(e.target.value)
        this.setState({message:{
          title:e.target.value,
          descript:this.state.descript,
          time:this.state.time
        }})
      }
      showDescript=(e)=>{
        // console.log(e.target.value)
         this.setState({message:{descript:e.target.value,
          time:this.state.time,
          title:this.state.title
        }})
       }
       showTime=(e)=>{
         console.log(this.state.message)
         this.setState({message:
          {time:e.target.value,
          title:this.state.title,
          descript:this.state.descript
        }})
       }

//关闭当前窗口
  handleClose = () => {
    this.onClick(false);
  }
    renderList = () => {
        return this.state.showDialog ? (
            <div className="mask-ctn">
            <div className="close-btn" onClick={this.props.handleClose}>close</div>
            <ul className="dialog-ctn">
            <li className="item"> 标题：<input type="text" onChange={this.showTitle} ></input></li>
            <li className="item"> 描述：<input type="text" onChange={this.showDescript}></input></li>
            <li className="item"> 时间：<input type="text" onChange={this.showTime}></input></li>
            <button className="submit-btn" onClick={()=>this.props.onAddTodo(this.state.message)}>提交</button>
            <button className="close-btn1" onClick={this.props.handleClose }>关闭</button>
        </ul>
      </div>
        ) : null;
    }
  render()
    {
    return(
       
           <div className="chat-bar" onClick={this.props.handleAddItem}>
           <h4 className="chat-bar__title">微信</h4>
           <img className="chat-bar-search" src={icon3} alt="" />
           <img className="chat-bar-add" src={icon4} alt="" onClick={this.handleShowDialog.bind(this, true)} />
            {this.renderList()}
           </div>
         ); 
        return null;
    }
    
} */}