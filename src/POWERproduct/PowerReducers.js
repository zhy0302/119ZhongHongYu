import React from 'react';
import PowerProject from './PowerProject/PowerProject';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionType from '../product/ActionType'
export default class PowerReducers extends Component {
    state={
        title:'点评作业:拥有个人点评页，可以为学生作业进行点评',
        isActive:false,
    }

    studentRightManage = () =>{
        this.setState({
            title:'点评作业:拥有个人点评页，可以为学生作业进行点评',
            isActive:true,
        })
    }
    teacherRightManage = () =>{
        this.setState({
            title:'带课老师:拥有审核点评老师点评内容的权限，包括撤回点评，自行点评',
            isActive:true,
        })
    }
    render() {
        return (
            <div className="todo-ctn">
                <h2>点评权限</h2>
                <div className='review-cate'>
                    <span className='review-content'>点评作业:拥有个人点评页，可以为学生作业进行点评</span>
                    <span className='right-manage' 
                        onClick={this.studentRightManage}>
                        权限管理
                    </span>
                </div>
                <div className='review-cate'>
                    <span className='review-content'>带课老师:拥有审核点评老师点评内容的权限，包括撤回点评，自行点评</span>
                    <span className='right-manage' 
                        onClick={this.teacherRightManage}>
                        权限管理
                    </span>
                </div>
                <PowerProject 
                    title={this.state.title}
                    state={this.props}
                    isActive={this.state.isActive}
                    />
            </div>   
        )
    }
}

// function mapStateToProps(state, ownProps) {
//     const {        
//         PowerProject
//     } = state;
//     return {
//         PowerProject
//     };
// }
// function mapDispatchToProps(dispatch) {
//     return {
//         todoActions: bindActionCreators(ActionType, dispatch),
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(PowerProject);