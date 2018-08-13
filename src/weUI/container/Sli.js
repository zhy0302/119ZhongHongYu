import React from 'react';
import Slider from '../component/Slider/Slider';
export default class Sli extends React.Component {
    state = {
        value: 25,
    }

    handleOnChange = (v) => {
        // console.log('handleOnChange value is',v);
        this.setState({
            value: v
        })
    }
    render() {
        return (
            <div >
                <div style={{
                    padding: 35
                }}>
                    <Slider             
                        defaultValue={this.state.value}   
                        showValue={true}    
                        onChange={this.handleOnChange}     
                    />
                </div>
                <div style={{
                    padding: 35
                }}>
                    <Slider             
                        defaultValue={this.state.value}   
                        showValue={false}    
                        onChange={this.handleOnChange}     
                        barColor={'rgb(26, 173, 25)'}
                        headerColor={'#eee'}
                    />
                </div >
                <h2
                    style={{
                        textAlign: 'center',
                        marginTop: 20
                    }}
                >{this.state.value}</h2>
            </div>
        )
    }
}




//     state = {
//         isActive : true,
//         Number : 7,
//         value:30,
//         onChange : () =>{
//             console.log("slider change")
//         }
//     };
//     render() {
//         return (
//             <div>
//                  <div >滑动块</div>
//                 <Slider
//                 isActive = {this.state.isActive}
//                 Number = {this.state.Number}
//                 onChange = {this.state.onChange}
//                 value = {this.state.value}
//                 />
//             </div>
//         )
//     }
// }