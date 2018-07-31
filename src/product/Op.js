
import React from 'react';
import { connect } from 'react-redux';
import ButtonBox from './ButtonBox/ButtonBox';
import Table from './Table/Table';
import 'antd/dist/antd.css';
import Header from './Header/Header';
import Tarbar from './Tarbar/Tarbar';
import {bindActionCreators} from 'redux';
import * as todoCreatoraction from './Action';
import axios from 'axios';
class Op extends React.Component {

  constructor() {
    super();
    }

    componentWillMount(){
      const { dispatch } = this.props;
      todoCreatoraction.FETCH_MSG("r", dispatch);
      todoCreatoraction.FETCH_USER("r", dispatch);
    }
      render() {
        const {todoActions} = this.props;
         return (
          <div className="App">
          <Header state={this.props} todoActions={todoActions}/>
          <Tarbar state={this.props} todoActions={todoActions}/>
          <ButtonBox state={this.props} todoActions={todoActions}/>
           <Table onClick={this.handleButtonClick} state={this.props} todoActions={todoActions}/> 
          </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  //console.log(state)
  const props = state;
  return props;
}
function mapDispatchToProps(dispatch){
  return{
      //todoActions:bindActionCreators(todoCreatoraction,dispatch)
      dispatch
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Op)


