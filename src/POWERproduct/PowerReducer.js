import React from 'react';
import PowerProduct from './PowerProduct/PowerProduct';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionType from '../product/ActionType/'
import '../../components/comments/comments.css'
export default class PowerReducer extends React.Component {
    state = {
        name:'',
        mid:'',
        isActive:false,
    }
    handleShow = () => {
        this.setState({
            isActive: true,
            name: '白帆',
            mid: '123456',
        });
    }
    render() {
        return (
            <div>
                 <div onClick={this.handleShow}>aa</div>
                    <PowerProduct              
                        isActive={this.state.isActive} 
                        name={this.state.name}
                        mid={this.state.mid}
                    />
                </div> 
        )
    }
}

