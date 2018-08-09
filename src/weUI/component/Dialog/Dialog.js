import React from 'react';
import './Dialog.css';
export default class ActionSheet extends React.Component {
    static defaultProps = {
        isActive: false,
        title: '',
        content: '',
        onCancel: () => { },
        onOK:()=>{},
    };
    getMaskDialogName = () => {
        if (!this.props.isActive) {
            return 'mask1 hideMask1';
        }
        return 'mask1 showMask1';
    }
    getMenuDialogName = () => {
        if (!this.props.isActive) {
            return 'menu1';
        }
        return 'menu1 showMenu';
    }
    render() {
        const { title, content } = this.props;
        return (
                <div className="dialogCtn">
                    <div className={this.getMaskDialogName()} onClick={this.props.onCancel} />
                    <div className={this.getMenuDialogName()}>
                        {
                            !title.length
                                ? null
                                : <div className="title_dialog divider">{title}</div>
                        }
                        {
                            !content.length
                                ? null
                                : <div className="content_dialog divider">{content}</div>
                        }
                        <div className="btn1">
                            <div className="btn1 main" onClick={this.props.onOK}>主操作</div>
                            <div className="btn1 help" onClick={this.props.onCancel}>辅操作</div>
                        </div>
                    </div>

                </div>
        )
    }
}