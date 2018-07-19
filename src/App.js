import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Buttom from './buttom';
//import Messageitem from './Messageitem';
import DialogView from'./DialogView';
import Mid from './mid';
import './DialogView.css';
import Nav from './Nav';
import DialogText from'./DialogText';

const icon1 = require('./icon/c.jpg');
const icon = require('./icon/b.jpg');
//const icon2 =require('./icon/addition_fill.png');

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      text:[
        {
        name:'aa',
        password:'123'
        }
      ],
      navData:[
        {
        icon,
        title:'微信'
        }
      ],
      showDailog: false,
      messages:[
        {
          icon,
          title:'小年糕',
          desc:'111',
          time:'10:00'
        },
        {
          icon:icon1,
          title:'小板凳',
          desc:'222',
          time:'13:00'
        },
        {
          icon:icon1,
          title:'小豆芽',
          desc:'333',
          time:'14:00'
        }
      ],
      bottomData:[
        {
          icon,
          title:'小豆芽'
        },
        {
          icon,
          title:'wx'
        },
        {
          icon,
          title:'wx'
        },
        {
          icon,
          title:'wx'
        }
      ]
    }
  }
  onclick = () => {
    //alert("hello")
    const onclick = this.props.onclick;
    const item = this.props.item;
    if (onclick) {
      onclick(item)
    }
  }
  onItemClick = (message) =>{
    console.log(message);
    this.setState({
      showDailog : true   //控制DialogView的显示
    })
}
onTextClick = () =>{
  console.log(this.props.show1);
  this.setState({
    showDailog : true   //控制DialogText的显示
  })
}

handleShowDialog = isActive => {
  this.setState({ isDialogActive: isActive });
}
  renderDailog = () => {
      if (this.state.showDailog) {
       return <DialogView show={this.handleClick}/>
    }
    return null;
  }
  renderDailog1 = () => {
    if (this.state.showDailog) {
     return <DialogText show1={this.handleAddItem}/>
  }
  return null;
}
  handleAddItem=()=>{
    console.log(this);
    console.log("add");
    const newMessages=this.state.messages.slice();
    newMessages.unshift({
      icon:icon,
      title:"小土豆",
      description:"123",
      time:"15:00"
    });
    this.setState({
      messages:newMessages
   });
  }
  handleClick=(event)=> {
    console.log(event.target.innerHTML);
  }
  renderNavList = () =>{
    const navData = this.state.navData
    return (
        navData.map((navItem, i) => (<Nav key={i} item={navItem}/>))
    )
  }
  renderMsgList = () =>{
    const messages = this.state.messages
    return (
     // <div>
        //{messages.map((msg, i) => (<Mid key={i} item={msg}/>))}
      //</div>
      messages.map((msg, i) => (<Mid key={i} item={msg}/>))
    )
  }
  renderBottomList = () =>{
    const bottomData = this.state.bottomData
    return (
        bottomData.map((buttonItem, i) => (<Buttom key={i} item={buttonItem}/>))
    )
  }
  render() {
    return (
      <div className="App"  >
      <div classname="nav" onClick={this.handleAddItem} onClick={this.onTextClick}>
        {this.renderNavList()}
        {this.renderDailog1()}
      </div>
        <ul className="mid" >
        {this.renderMsgList()}
        {this.renderDailog()}
        </ul>
        <div className="buttom" onClick={this.onclick} onClick={this.onItemClick}>
        {this.renderBottomList()}
          </div>
      </div>
    );
  }
}

export default App;
