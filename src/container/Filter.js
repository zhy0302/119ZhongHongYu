import React from 'react';
import '../container/Style.css'
import icon from '../icon/smile.png';
import icon1 from '../icon/collect.png';
import icon2 from '../icon/photo.png';
export default class Filter extends React.Component {
  render() {
      return (
        
        <nav className="chat-nav">
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
      )
    
  }
}
