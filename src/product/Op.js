
import React from 'react';
import { connect } from 'react-redux';
import ButtonBox from './ButtonBox/ButtonBox';
// import Table1 from './Table1/Table1';
// import Table from './Table/Table';
// import ClassTable from './ClassTable/ClassTable';
import 'antd/dist/antd.css';
import Header from './Header/Header';
import Tarbar from './Tarbar/Tarbar';
import { bindActionCreators } from 'redux';
import * as todoCreatoraction from './Action';
class Op extends React.Component {
  state = {
    inputVal: ''
  };
  componentDidMount() {
    const { todoActions } = this.props
    todoActions.FETCH_USER('1001');
    todoActions.FETCH_MSG('1001');
    todoActions.FETCH_XYDA('1001');
    todoActions.FETCH_CLASS('1001');
    todoActions.FETCH_SATIFY('1001');
    // todoActions.FETCH_HOMEWORK('1001');
    //todoCreatoraction.FETCH_MSG(inputVal,dispatch);
  }
  render() {
    const { todoActions } = this.props;
    return (
      <div className="App">
        <Header state={this.props} todoActions={todoActions} />
        <Tarbar state={this.props} todoActions={todoActions} />
        {/* <ButtonBox state={this.props} todoActions={todoActions} /> */}
        {/* <Table  state={this.props} todoActions={todoActions} />
        <Table1  state={this.props} todoActions={todoActions}/>   */}
        {/* <ClassTable state={this.props} todoActions={todoActions}/> */}
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
export default connect(mapStateToProps, mapDispatchToProps)(Op)


