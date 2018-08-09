import React from 'react';
import ActionSheet from '../component/ActionSheet/ActionSheet';
export default class Act extends React.Component {
    state = {
        inputVal: '',
       isActionSheetActive: false,
        title: '',
        type:'',
        menus: []
    };
    handleShowActionSheet1 = () => {
        this.setState({
            isActionSheetActive: true,
            type:'ios',
            title: '这是一个标题1',
            menus: [{
                title: '示例菜单1',
               // type: 'danger',
                click: () => console.log('示例菜单1')
            }, {
                title: '示例菜44',
                click: () => console.log('示例菜单2')
            }]
        });
    }
    handleShowActionSheet2 = () => {
        this.setState({
            isActionSheetActive: true,
            title: '这是一个标题2',
            type:'Andriod',
            menus: [{
                title: '示例菜单3',
               // type: 'danger',
                click: () => console.log('示例菜单3')
            }, {
                title: '示例菜4',
                click: () => console.log('示例菜4')
            }]
        });
    }
    handleHideActionSheet = () => {
        this.setState({
            isActionSheetActive: false
        });
    }
    render() {
        return (
            <div>
                <div onClick={this.handleShowActionSheet1}>ios</div>
                <div onClick={this.handleShowActionSheet2}>Andriod</div>
                <ActionSheet
                    isActive={this.state.isActionSheetActive}
                    title={this.state.title}
                    menus={this.state.menus}
                    onCancel={this.handleHideActionSheet}
                    type={this.state.type}
                />
            </div>
        )
    }
}