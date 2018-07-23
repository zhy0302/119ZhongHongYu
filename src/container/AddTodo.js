import React from 'react';
import  Todo from'./Todo.js';
import './Style.css';
import './TodoStyle.css';
import icon5 from '../icon/tianjia.jpg';
import icon from '../icon/smile.png';
import icon3 from '../icon/search.png';
import icon4 from '../icon/add.png';
const {addicon} = require('../icon/add.png')
export default class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showDialog:false
        }
    }
   /* handleInput=(e)=>{
        console.log(e.target.value);
        //Todo:callback(this.inputValue)
        this.inputValue=e.target.value;

    }
    handleSubmit=()=>{
        console.log(this.inputValue);
        const {onClick} = this.props;
        this.setState({
            showDialog:!this.state.showDialog,
        });
        this.props.handleSubmit({title:2,time:2,decript:1},0)
    }*/
//顶部添加
 handleAddItem = (item) => {
    console.log(item)
    if(!item.title||!item.descript||!item.time){
      this.setState({
          showDialog:!this.state.showDialog,
      })
    }else{
      const newMessages = this.state.messages.slice();
      newMessages.unshift({
        icon: icon,
        title:item.title,
        descript: item.descript,
        time: item.time
      });
      console.log(newMessages)
      this.setState({
        messages: newMessages,
        showDialog:!this.state.showDialog,
      });  
   }
  }
    //DalogView当前状态
  handleShowDialog = ()=> {
    this.setState({showDialog:!this.state.showDialog });
  }

  render()
    {
        if(!this.state.showDialog){
            return null;
        }
    return(
            //<div>
           // return<input className="add-input" onChange={this.handleInput}/>
           // <span className="add-submit" onClick={this.handleSubmit}>确认</span>
           // </div>
           <div className="chat-bar" onClick={this.props.handleAddItem}>
           <h4 className="chat-bar__title">微信</h4>
           <img className="chat-bar-search" src={icon3} alt="" />
           <img className="chat-bar-add" src={icon4} alt="" onClick={this.handleShowDialog.bind(this, true)} />
           </div>
         ); 
        return null;
    }
    
} 



/*export default class AddTodo extends React.Component{
    constructor(){
        super();
        this.state={
            showDialog:false
        }
        this.inputValue='';
    }
    showAddText=()=>{
           this.setState({
            showDialog:true
    });
    }

    handleInput=(e)=>{
        console.log(e.target.value);
        //Todo:callback(this.inputValue)
        this.inputValue=e.target.value;

    }
    handleSubmit=()=>{
        console.log(this.inputValue);
        const {onClick} = this.props;
        this.setState({
            showDialog:!this.state.showDialog,
        });
        this.props.handleSubmit({title:2,time:2,decript:1},0)
    }
    _renderInput()
    {
        if(!this.state.showDialog){
            return null;
        }
        return(
            <div>
            return<input className="add-input" onChange={this.handleInput}/>
            <span className="add-submit" onClick={this.handleSubmit}>确认</span>
            </div>
           
         ); 
        return null;
    }
    render(){
        return(
        <div className="add-ctn" >
        <div className="add-icon-ctn" onClick={this.showAddText}>
        <img className="add-icon" src={icon5} />
        </div>      
        {this._renderInput()}
        
        </div>
        );
    }
} */