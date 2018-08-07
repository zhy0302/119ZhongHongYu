
import React from 'react';
import { connect } from 'react-redux';
import Evapage from './evaluatePage/Evapage';
import 'antd/dist/antd.css';
import Nav from '../XYDAproduct/Nav/Nav';
//import Menu from './MENU/Menu';
import { bindActionCreators } from 'redux';
import * as todoCreatoraction from '../product/Action';
class Evaluate extends React.Component {
  state = {
    inputVal: ''
  };
  componentWillMount() {
    const { todoActions } = this.props
    todoActions.FETCH_USER('1001');
    todoActions.FETCH_MSG('1001');
    todoActions.FETCH_XYDA('1001');
    todoActions.FETCH_CLASS('1001');
    todoActions.FETCH_HOMEWORK(0,0);

    // console.log(todoCreatoraction.FETCH_USER)
    //todoCreatoraction.FETCH_MSG(inputVal,dispatch);
  }
  render() {
    const { todoActions } = this.props;
    console.log(this.props)
    return (
      <div className="App">
        <Nav  state={this.props} todoActions={todoActions}/>  
        <Evapage  state={this.props} todoActions={todoActions}/>  
      </div>
    )
  }
}
function mapStateToProps(state, ownProps) {
  const props = state;
  return props;
}
function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(todoCreatoraction, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Evaluate)