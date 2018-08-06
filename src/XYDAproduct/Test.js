
import React from 'react';
import { connect } from 'react-redux';
import Table1 from '../product/Table1/Table1';
import 'antd/dist/antd.css';
import Nav from './Nav/Nav';
//import Menu from './MENU/Menu';
import { bindActionCreators } from 'redux';
import * as todoCreatoraction from '../product/Action';
class Test extends React.Component {
  state = {
    inputVal: ''
  };
  componentWillMount() {
    const { inputVal } = this.state;
    const { todoActions } = this.props
    const { dispatch } = this.props;
    todoActions.FETCH_USER('1001');
    todoActions.FETCH_MSG('1001');
    todoActions.FETCH_XYDA('1001');
    todoActions.FETCH_CLASS('1001');
    console.log(todoCreatoraction.FETCH_USER)
    //todoCreatoraction.FETCH_MSG(inputVal,dispatch);
  }
  render() {
    const { todoActions } = this.props;
    return (
      <div className="App">
        <Nav state={this.props} todoActions={todoActions} />
        {/* <Menu state={this.props} todoActions={todoActions} /> */}
        <Table1  state={this.props} todoActions={todoActions}/>  
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
export default connect(mapStateToProps, mapDispatchToProps)(Test)