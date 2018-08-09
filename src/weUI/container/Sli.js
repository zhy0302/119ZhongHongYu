import React from 'react';
import Slider from '../component/Slider/Slider';
export default class Sli extends React.Component {
    state = {
        isActive : true,
        Number : 7,
        onChange : () =>{
            console.log("slider change")
        }
    };
    render() {
        return (
            <div>
                 <div >滑动块</div>
                <Slider
                isActive = {this.state.isActive}
                Number = {this.state.Number}
                onChange = {this.state.onChange}
                />
            </div>
        )
    }
}