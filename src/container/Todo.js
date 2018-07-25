import React from 'react';
import './Style.css';
import './TodoStyle.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './Filter';
import {ADDTODO} from '../container/ActionType';
import {connect} from 'react-redux';
import { createStore } from '../../node_modules/redux';
import { provider } from 'react-redux';
import rootReducer from '../container/reducers';
const store = createStore(rootReducer)
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  handleAddItem = (item) => {
    // console.log(item)
    // const { submit } = this.props;
    if (!item.title || !item.descript || !item.time) {//如果三个输入框有一个为空，则状态不变
      this.setState({
        showDialog: !this.state.showDialog,
      })
    } else {                                       //否则，就获取输入的值，放到顶部
      const newMessages = this.state.messages.slice();//将数据拷贝一份
      //newMessages[idx].isCompleted=1;
      newMessages.unshift({
        // icon: icon,
        title: item.title,
        descript: item.descript,
        time: item.time
      });
      //console.log(newMessages)
      this.setState({
        messages: newMessages,
        showDialog: !this.state.showDialog,
      });
    }
  }

  render() {
    return (
      <provider store={store}>
        <AddTodo onClick={this.handleAddItem} />
        <TodoList onTodoItemClick={this.handleTodoItemClick} messages={this.state.messages} />
        <Filter />
      </provider>   
      /* function mapStateToProps(state, props) {
        return { messages:state.messages }
    }
      export default connect(mapStateToProps)(Todo);*/
        );
  }
} 