// import Tab from './containers/Tab';
import React from 'react';
import { connect } from 'react-redux';
import Middle from '../components/newTab/Middle';
import Top from '../components/newTab/Top';
import Footer from '../components/newTab/Footer';
import Dialog from '../components/newTab/Dialog';
import DialogText from '../components/newTab/DialogText';
import {bindActionCreators} from 'redux'
import * as todoCreatoraction from '../action'
//import '../components/newTab/Tab.css'
//import { combineReducers } from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
//import{connect}from'react-redux';

class Tab extends React.Component {
       
    // callState = (item) =>{
    //     this.setState({
    //         isDialog:item.dialog,
    //         index:item.index
    //     })
    // }
    // callDialog = (item) =>{
    //     this.setState({
    //         messages:item.messages
    //     })
    // }
    //callDialog1 = (item) =>{
        //     this.setState({
        //         messages:item.messages
        //     })
        // }
    // callback=(item)=>{
    //     this.setState({
    //         messages:item.messages
    //     })
    // }
    // callShowCheck = (item) =>{
    //     this.setState({
    //         showcheck:item.showCheck
    //     })
    // }

    // deleteArr = (item) =>{
    //     this.setState({
    //         deleteArr:item.deleteArr
    //     })
    // }

    // deleteArr1 = (item) =>{
    //     this.setState({
    //         deleteArr:item.deleteArr,
    //         messages:item.messages,
    //         showcheck:item.showcheck
    //     })
    // }
   // callState2= (item) =>{
        // this.setState({
        //     isDialog1:item.dialog1,
        // })
   // }
   /* callState3=()=>{
            const { addMess } = this.props;
            if (!this.refs.myInput.value || !this.refs.myInput1.value || !this.refs.myInput2.value) {
                this.setState({
                    overreturn: !this.state.overreturn,
                })
            } else {
                this.setState({
                    overreturn: !this.state.overreturn,
                })
            }
    }*/
    render() {
        const {todoActions} = this.props;
        return (
            <div>
                <Top state={this.props} todoActions={todoActions}/>
                <Middle state={this.props}  todoActions={todoActions}/>
                <Footer />
                <Dialog state={this.props}  todoActions={todoActions}/>
                <DialogText state={this.props} todoActions={todoActions}/>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const {messagesItem,controlDia} = state;
    return {messagesItem,controlDia};
}
function mapDispatchToProps(dispatch){
    return{
        todoActions:bindActionCreators(todoCreatoraction,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Tab)