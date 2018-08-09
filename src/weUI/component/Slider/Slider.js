import React from 'react';
import './Slider.css';
export default class Slider extends React.Component {
    static defaultProps = {
        isActive: false,
      };

    render() {
        return (
            <div>
            <div className="slider">
                <div className="slider_box">
                <div className="slider_inner">
                <div className="slider_track"></div>
                <div className="slider_handler"></div>
                </div>
                </div>
                <div classname="slider_value"></div>
            </div>
            </div>
        )
    }
}