
import React from 'react';
import { connect } from 'react-redux';
import ButtonBox from './ButtonBox/ButtonBox';
import Table from './Table/Table';
import 'antd/dist/antd.css';
import Header from './Header/Header';
import Tarbar from './Tarbar/Tarbar';
class Op extends React.Component {

  constructor() {
    super();
    }
      render() {
         return (
          <div className="App">
          <Header/>
          <Tarbar/>
          <ButtonBox/>
           <Table/> 
          </div>
    )
  }
}
export default App;

