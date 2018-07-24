import React from 'react';
import './App.css';
import Td from './project/Td';
class App extends React.Component {
  render() {
      return ( 
      //  {this.renderMoreBtn()}
          <Td />        
      )
  }
}

/*import React from 'react';
import MessageItem from './components/MessageItem.js';
import DialogView from './components/DialogView.js';
import './App.css';
import DialogText from'./components/DialogText';
// const icon = require('./resource/icon_Good_B-2.png');
import icon from './icon/smile.png';
import icon1 from './icon/collect.png';
import icon2 from './icon/photo.png';
import icon3 from './icon/search.png';
import icon4 from './icon/add.png';
import Todo from './container/Todo';



class App extends React.Component {
//构造函数，实例化
  constructor(props){
    super(props);

    this.state = {
      messages: [
        {
          icon: icon1,
          title: '小年糕',
          descript: 'hello 小年糕',
          time: '7-18 11:14'
        },
        {
          icon: icon2,
          title: '小板凳',
          descript: 'hello 小板凳',
          time: '7-18 11:15',
        },
        {
          icon: icon,
          title: '小豆包',
          descript: 'hi 小豆包',
          time: '7-17 10:00',
        }
      ],
      showDialog: false,
      showDialog1: false,
      key:0,
      checkbox:false,
      moreSeclet: false,
      deleteArr:[],
    }
  }
   //点击事件显示浮动层
  onItemClick = (key) => {
    this.setState({
        showDialog1:!this.state.showDialog1,
    })
    this.state.key = key;
}
  renderMessageList = () => {
    const {moreSeclet}= this.state
    const messageViews=this.state.messages.map((item,index)=>{
      return<MessageItem 
      key={index} 
      item={item} 
      show1={this.onItemClick.bind(this,index)} //弹出框显示
      det={moreSeclet} //判断是否出现复选框
      delete={this.handDelete.bind(this,index)}/>
    });
    return messageViews;
  }
//批量删除  //考虑删除时倒序删除，正向删除会影响删除一个后的下脚标数值
  handDelete = (key,event) =>{
    this.setState({
      checkbox:!this.state.checkbox//判断复选框状态
      })
      if(event.target.checked){
        this.state.deleteArr.push(key);//选中删除
      }else if(!event.target.checked ){  //未选中
      if(this.state.deleteArr.include(key))//该位置已经被选中
        delete this.state.deleteArr[key]//取消选中
      }
  }
//多选删除
  moreDelete = () =>{
        this.state.deleteArr.map((item,index)=>{
            delete this.state.messages[item]//删除该数组信息
        })
        this.setState({                        //更新状态
            messages:this.state.messages,
            moreSeclet:false
        })
    }
    
//打印聊天层
    handleChat = (event) => { 
    
      const copyMessage = this.state.messages.slice()//将messages中内容复制一次
     
      if(event.target.innerHTML === "置顶"){
          const temp = copyMessage[this.state.key];
          delete copyMessage[this.state.key]         //删除当前状态位置
          copyMessage.unshift(temp)                  //将该状态位置放到顶部
          this.setState({                            //更新状态
              messages:copyMessage,
              showDialog1:!this.state.showDialog1,
          });
      }else if(event.target.innerHTML === "删除"){
          delete copyMessage[this.state.key]
          this.setState({
              messages:copyMessage,
              showDialog1:!this.state.showDialog1,

          });
      }else if(event.target.innerHTML === "多选"){
          this.setState({
            moreSeclet:true,
              showDialog1:!this.state.showDialog1,
          })
      }
  }
//多选删除下button
  renderMoreBtn = () =>{
      if(this.state.moreSeclet)
          return (
              <div className="moreDelete">
                  <button onClick={this.moreDelete}>删除</button>
                  <button onClick={this.cancle}>取消</button>
              </div>
      )
  }
//更多选项里删除事件取消复选框
  cancle = () =>{
      this.setState({
        moreSeclet:false,
          
      })
  }
  //显示浮动层内容
  renderDialog = () =>{
      if(this.state.showDialog1)
          return <DialogText  showText={this.handleChat}/>
  }
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

//判断当前状态是否改变，若改变，则弹出DialogView
  handleViewDialog=()=>{
    if (this.state.showDialog){
    return <DialogView onClick={this.handleAddItem} />
    }
  }
  //关闭当前窗口
  handleClose = () => {
    this.onClick(false);
  }
  render() {
   // const { item } = this.props;
    return (
      <div>
        {this.renderDialog()}
        {this.renderMessageList()}
        {this.handleViewDialog()}
        {this.renderMoreBtn()}

        <nav className="chat-nav">
        <div className="chat-bar" onClick={this.handleAddItem}>
            <h4 className="chat-bar__title">微信</h4>
            <img className="chat-bar-search" src={icon3} alt="" />
            <img className="chat-bar-add" src={icon4} alt="" onClick={this.handleShowDialog.bind(this, true)} />
        </div>
          <div className="chat-nav__item" onClick={this.handleAddItem}>
            <img className="chat-nav__item__icon" src={icon} alt="" />
            <div className="chat-nav__item__name">微信</div>
          </div>
          <div className="chat-nav__item">
            <img className="chat-nav__item__icon" src={icon2} alt="" />
            <div className="chat-nav__item__name">通讯录</div>
          </div>
          <div className="chat-nav__item">
            <img className="chat-nav__item__icon" src={icon1} alt="" />
            <div className="chat-nav__item__name">发现</div>
          </div>
          <div className="chat-nav__item" >
            <img className="chat-nav__item__icon" src={icon} alt="" />
            <div className="chat-nav__item__name">我</div>
          </div>
        </nav>
      </div>
    );
  }
}*/

export default App;
