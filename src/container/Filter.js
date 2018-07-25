import React from 'react';
import './Style.css';
import './TodoStyle.css';
import icon6 from '../icon/smile.png';
import icon1 from '../icon/collect.png';
import icon2 from '../icon/photo.png';
// import addicon from'../icon/add.png';
export default class Filter extends React.Component{
      constructor() {
        super();
        this.state = {
            images: [
                {
                    img: require('icon1'),
                },
                {
                    img: require('icon2'),
                },
                {
                    img: require('icon6'),
                },
                {
                    img: require('icon1'),
                }
            ],
        }
    }
    renderImages = () => {
        return this.state.images.map((item, index) => {
            return (
              <div className="chat-nav__item" onClick={this.handleAddItem}>
              <img className="chat-nav__item__icon"  src={item.img}  alt='' />
              <div className="chat-nav__item__name">微信</div>
            </div>
            )
        })
    }
    render() {
        return (
                <ul>
                    {this.renderImages()}
                </ul>
        )
    }
} 



      //const { filterCompleted, onFilterCompletedClick } = this.props;
       /* return(
            <nav className="chat-nav">
            <div className="chat-nav__item" onClick={this.handleAddItem}>
            <img className="chat-nav__item__icon" src={icon6} alt="" />
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
            <img className="chat-nav__item__icon" src={icon6} alt="" />
            <div className="chat-nav__item__name">我</div>
          </div>
          </nav>
        )
    }
} */