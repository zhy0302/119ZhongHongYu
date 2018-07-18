import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
export default class Messageitem extends Component
{
    constructor(props)
    {super(props)
    }
onMsgClick = () => {
        const { onClick,item } = this.props;
        if(onClick){  
            onClick(item);
        }
    }
onclick=()=>{
    const onclick=this.props.onclick;
    const item=this.props.item;
    if(onclick){
        onclick(item)
    }
}

render(){
    const {item} = this.props;
    return(
        <li className="mid1" >
        <img className="mid1-img" src="./c.jpg" alt=""/>              
         <div className="mid1_content" id="content">
         <div className="mid1-content-topbar">
              <h2 className="mid1-content-title" onclick="aa()">小年糕前端训练营</h2>
          <div className="mid1-content-time">上午11:30</div>                  
     </div>
     <div className="mid1-msg"> 了解了（抱拳）</div>                  
     </div>
  </li>
    )
}

}
