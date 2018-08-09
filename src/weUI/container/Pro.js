import React from 'react';
import Progress from '../component/Progress/Progress';
export default class Pro extends React.Component {
    state = {
        inputVal: '',
        isProgress: false,
    };

    handleUpload = () => {
        this.setState({
            isProgress: true
        });
    }
    render(){
        return(
            <div>
                 <div >进度条</div>
                <Progress
                isActive={this.state.isProgress}
                upOnload={this.handleUpload}
                />
           </div>
        )
    }
    }
    