import React from 'react';
import { connect } from 'react-redux';
import PowerProduct from './PowerProduct/PowerProduct'
//import PowerProject from './PowerProject/PowerProject'
import 'antd/dist/antd.css';
import Nav from '../XYDAproduct/Nav/Nav';
import { bindActionCreators } from 'redux';
import * as todoCreatoraction from '../product/Action';
class Power extends React.Component {
  state = {
    inputVal: ''
  };
  componentWillMount() {
    const { todoActions } = this.props
  }
  render() {
    const { todoActions } = this.props;
    console.log(this.props)
    return (
      <div className="App">
        <Nav state={this.props} todoActions={todoActions} />
         <PowerProduct  state={this.props} todoActions={todoActions}/>  
       {/* <PowerProject  state={this.props} todoActions={todoActions}/> */}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
 
  const {
    Entities,
    PowerReducer
  } = state; 

  return {
    Entities,
    PowerReducer};
}
function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(todoCreatoraction, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Power)