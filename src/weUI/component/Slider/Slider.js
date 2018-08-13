import React from 'react';
import './Slider.css';
export default class Slider extends React.Component {
        static defaultProps = {
            defaultValue: 0,
            showValue: true,
            barColor: '',
            headerColor: '',
            onChange: () => { },
            getValue: () => { }
        }
        constructor(props) {
            super(props);
            this.state = {
                value: this.props.defaultValue,
            }
        }
        handleMoveSlider = (e) => { //处理坐标位置
            const allWidth = window.outerWidth
            const pageX = e.touches[0].pageX
            const v = (pageX / allWidth) * 100;
            let pos = 0;
            if (v > 100) pos = 100;
            else if (v < 0) pos = 0;
            else pos = parseInt(v);
            this.setState({
                value: pos
            })
            const { onChange } = this.props;
            onChange && onChange(pos);
        }
   
        handleShowTip = () => {
            this.setState({
                tipIsActive: true
            })
        }
   
        render() {
   
            return (
                <div className="slider-wraper">
                    <div style={{
                        width: `${this.state.value}%`,
                        backgroundColor: this.props.barColor
                    }} className="slider-value">
                        <span
                            style={{
                                backgroundColor: this.props.headerColor
                            }}
                            className="slider-btn"
                            onTouchMove={this.handleMoveSlider}
                            onMouseOver={this.handleShowTip}
                        >
                            {this.props.showValue
                                ? this.state.value
                                : null}
                        </span>
                    </div>
   
                </div>
            )
        }
    }   





//     static defaultProps = {
//         defaultValue : 0, 
//         Number, 
//         isActive: false,
//         };
//       handleChange = () =>{
//         const { onChange } = this.props;
//         onChange();
//     }
//     render() {
//         const { isActive,Number } = this.props;
//         return (
//             <div className="slide">
//                  <input type="range"  step='1' min="0" max="100" onChange={this.handleChange}/>
//                  <span>
//                      {isActive?<span>{Number}</span>:null}
//                  </span>
//             {/* <div className="slider">
//                 <div className="slider_box">
//                 <div className="slider_inner">
//                 <div className="slider_track"></div>
//                 <div className="slider_handler"></div>
//                 </div>
//                 </div>
//                 <div classname="slider_value"></div>
//             </div> */}
//             </div>
//         )
//     }
// }