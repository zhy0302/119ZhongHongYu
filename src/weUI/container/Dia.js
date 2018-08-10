import React from 'react';
import Dialog from '../component/Dialog/Dialog';
export default class Act extends React.Component {
    state = {
        inputVal: '',
        isDialogActive: false,
        title: '',
        content:'',
    };
    handleShowDialog1 = () => {
        this.setState({
            isDialogActive: true,
            title: '弹窗标题',
            content: 'hello,world!',
        });
    }
    handleShowDialog2 = () => {
        this.setState({
            isDialogActive: true,
            title: '弹窗标题',
            content: 'you are best!',
        });
    }
    handleHideDialog = () => {
        this.setState({
            isDialogActive: false
        });
    }
    handleOKDialog=()=>{
        this.setState({
            isDialogActive: false,
        })
    }
render(){
    return(
        <div>
             <div onClick={this.handleShowDialog1}>ios </div>
             <div onClick={this.handleShowDialog2}>Andriod</div>
            <Dialog
                 isActive={this.state.isDialogActive}
                 title={this.state.title}
                 content={this.state.content}
                 onCancel={this.handleHideDialog}
                 onOK={this.handleOKDialog}/>
       </div>
    )
}
}
