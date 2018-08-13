import React from 'react';
import './Switchs.css';
import{Switch} from 'antd';
export default class Switchs extends React.Component {
    static defaultProps = {
        checked: false,
        onChange: () => { },
        color: ''
    }
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked
        }
    }
    toggleSwitch = () => {
        this.setState({
            checked: !this.state.checked
        });
    }
    onSwitchChange = () => {
        const { onChange } = this.props;
        onChange && onChange(!this.state.checked);
        this.toggleSwitch();

    }
    getSwitchClassName = () => {
        const { checked } = this.state;
        if (checked) {
            return 'checked'
        } else {
            return null
        }
    }
    render() {
        return (
            <div
                onClick={this.onSwitchChange}
                className={"switch-box " + this.getSwitchClassName()}
               >
                <div className="switch-ball"></div>
            </div>
        )
    }
} 






//     state = {
//         isActive : false
//     }
//     onChange = () =>{
//         console.log("change")
//     }
//     render() {
//         return (
//             <div>
//                  <Switch
//                  isActive = {this.state.isActive}
//                  onChange = {this.onChange}
//                  />
//             </div>
//         )
//     }
// }