import React from 'react';
import Nav from './Nav';
import Mid from './Mid';
import Buttom from './Buttom';
import '../App.css';
import './Mid.css';
//import '../project/Mid.css';
//import './TodoStyle.css';
import icon6 from '../icon/smile.png';
import icon1 from '../icon/collect.png';
import icon2 from '../icon/photo.png';
import icon from '../icon/smile.png';
// import addicon from'../icon/add.png';
export default class Td extends React.Component{
    constructor(props){
        super(props);   
        this.state = {
            todoList:[{
                title:'微信',
                color:'red'
            },
             {
                title:'微信',
                color:'blue'  
             },
             {
                 title:'微信',
                 color:'purple' 
               },
              {
                title:'我',
                color:'yellow'
              } 
            ],
        isCompleted:false,
        seclet:false,
        key:0,  
        check:false,
      }
    }    
         renderMessageList = () => {
        const {Seclet}= this.state
        const newTodoList=this.state.todoList.map((item,idx)=>{
          return<Buttom 
          key={idx} 
          item={item} 
          check={Seclet} //判断是否被选择
          Selected={this.handleSecleted.bind(this,idx)}/>
        });
        return newTodoList;
      }
 
    /*handleSecleted = (item, idx) => {
        const newTodoList = this.state.todoList.slice();
        newTodoList[idx].isCompleted = !newTodoList[idx].isCompleted;
        this.setState({
          todoList: newTodoList
        });
      }
   onSeclet = (key,event) =>{
       this.setState({
      check:!this.state.check//判断按钮状态
      })
      if(event.target.check){
        this.state.handleSecleted(key);//选中
      }
      else if(!event.target.check ){  //未选中
      if(this.state.Arr.include(key))//该位置已经被选中
        delete this.state.Arr[key]//取消选中
      }
  }
*/
  handleTodoItemClick = (item, idx) => {
    const newTodoList = this.state.todoList.slice();
    newTodoList[idx].isCompleted = !newTodoList[idx].isCompleted;
    this.setState({
      todoList: newTodoList
    });
  }
  /*
  handleChat = (event) => {    
    if(event.target.innerHTML === "我"){
        Selected todoList[this.state.key]         //选择当前状态位置
        this.setState({                            //更新状态
            todoList: newTodoList
            isCompleted:!this.state.isCompleted,
        });
    }else if(event.target.innerHTML === "通讯录"){
        Selected todoList[this.state.key]
        this.setState({
            todoList: newTodoList
            isCompleted:!this.state.isCompleted,
        });
    }else if(event.target.innerHTML === "发现"){
        Selected todoList[this.state.key]
        this.setState({
            todoList: newTodoList
          isCompleted:!this.state.isCompleted,
        })；
    }else if(event.target.innerHTML === "通讯录"){
        Selected todoList[this.state.key]
        this.setState({
            todoList: newTodoList
            isCompleted:!this.state.isCompleted,
        })
    }
  }*/
   render(){
        return(   
        <div className="todo-ctn">
            <Nav/>
            <Mid onTodoItemClick={this.handleTodoItemClick}   showText={this.handleChat}/>
            <Buttom />
        </div>  
        )
    }
} 