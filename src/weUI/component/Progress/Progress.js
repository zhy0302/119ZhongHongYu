import React from 'react';
import './Progress.css';
export default class Progress extends React.Component {
    static defaultProps = {
        isActive: false,
        // upOnload:()=>{},
      };
      upOnload=()=>{
        if (!this.props.isActive) {
            return <div className="progress_inner_bar"></div>
          }
          return <div className="progress_inner_bar_after"></div>
        }

    render() {
        return (
            <div className="progressCtn">
                 <div className= "progress_bar" >
                {this.upOnload()}
                </div> 
                <div className="btn_upload" onClick={this.props.upOnload}>上传</div>
            </div>
        )
    }
}