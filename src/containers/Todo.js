// import Tab from './containers/Tab';
import React from 'react';
import { connect } from 'react-redux';
import Middle from '../components/newTab/Middle';
import Top from '../components/newTab/Top';
import Footer from '../components/newTab/Footer';
import Dialog from '../components/newTab/Dialog'
import '../components/newTab/Tab.css'

class Tab extends React.Component {
    constructor(){
        super();
        this.state = {
            isDialog:false,
            isDialog1:false,
            index:null,
            key:0,
            showcheck:false,
            deleteArr:[],
        }
    }

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
    callState2= (item) =>{
        // this.setState({
        //     isDialog1:item.dialog1,
        // })
    }
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
        const {dispatch} = this.props;
        console.log(this.props)
        return (
            <div>
                <Top state={this.props} callState2={this.callState2}
               />
                <Middle state={this.props}  dispatch={dispatch}/>
                <Footer />
                <Dialog state={this.props}  dispatch={dispatch}/>
            </div>
        )

    }
}

function mapStateToProps(state, ownProps) {
    const states = state;
    return states;
}
export default connect(mapStateToProps)(Tab)