import React from 'react';
import './Switchs.css';
import{Switch} from 'antd';
export default class Switchs extends React.Component {
    state = {
        isActive : false
    }
    onChange = () =>{
        console.log("change")
    }
    render() {
        return (
            <div>
                 <Switch
                 isActive = {this.state.isActive}
                 onChange = {this.onChange}
                 />
            </div>
        )
    }
}