import React from 'react';
import './Slider.css';
export default class Slider extends React.Component {
    static defaultProps = {
        defaultValue : 0, 
        Number, 
        isActive: false,
      };
      handleChange = () =>{
        const { onChange } = this.props;
        onChange();
    }
    render() {
        const { isActive,Number } = this.props;
        return (
            <div className="slide">
                 <input type="range"  step='1' min="0" max="100" onChange={this.handleChange}/>
                 <span>
                     {isActive?<span>{Number}</span>:null}
                 </span>
            {/* <div className="slider">
                <div className="slider_box">
                <div className="slider_inner">
                <div className="slider_track"></div>
                <div className="slider_handler"></div>
                </div>
                </div>
                <div classname="slider_value"></div>
            </div> */}
            </div>
        )
    }
}