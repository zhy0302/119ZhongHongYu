import React from 'react';
import './Dialog.css';
export default class ActionSheet extends React.Component {
    static defaultProps = {
        isActive: false,
        title: '',
        content: '',
        okText: '确定',
        cancleText: '取消',
        onCancel: () => { },
        onOK: () => { },
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
        const { title, content, okText, cancleText, isActive } = this.props;
        if (!isActive) { return null }
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
                        <div className="main" onClick={this.props.onOK}>{okText}</div>
                        <div className=" help" onClick={this.props.onCancel}>{cancleText}</div>
                    </div>
                </div>

            </div>
        )
    }
}