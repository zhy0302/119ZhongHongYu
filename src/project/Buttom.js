import React from 'react';
//import './Style.css';
//import './TodoStyle.css';
import icon3 from '../icon/search.png';
import icon4 from '../icon/add.png';
import icon6 from '../icon/smile.png';
import icon1 from '../icon/collect.png';
import icon2 from '../icon/photo.png';
// import addicon from'../icon/add.png';
export default class Buttom extends React.Component{
    constructor(props){
        super(props);
        } 
    render(){
          return(
          <nav className="chat-nav">
            <div className="chat-nav__item" >
              <img className="chat-nav__item__icon" src={icon6} alt="" />
              <div className="chat-nav__item__name">微信</div>                                                                                                  
           </div>
           <div className="chat-nav__item">
             <img className="chat-nav__item__icon" src={icon2} alt="" />
             <div className="chat-nav__item__name">通讯录</div>
           </div>
          <div className="chat-nav__item">
            <img className="chat-nav__item__icon" src={icon1} alt="" />                 
            <div className="chat-nav__item__name">通讯录</div>
            </div>
          <div className="chat-nav__item" >
            <img className="chat-nav__item__icon" src={icon6} alt="" />
            <div className="chat-nav__item__name">我</div>
          </div>
        </nav>
        )
      }
    }