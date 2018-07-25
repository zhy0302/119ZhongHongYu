import React from 'react';
import AddTodo from '../component/AddTodo';
import TodoList from '../component/TodoList';
import Filter from '../component/Filter';
import {provider} from 'react-redux';
import rootReducer from './rootReducer';
import { createStore } from '../../node_modules/redux';
const store=createStore(rootReducer)
export default class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [{
        txt: 'sad',
        isCompleted: false
      }, {
        txt: 'ppppp',
        isCompleted: false
      }],

      filterCompleted: false
    };
  }

  getFilterList = list => {
    return list.filter(item => item.isCompleted)
  }

  handleAddTodo = txt => {
    const newList = this.state.todoList.slice();
    newList.unshift({
      txt: txt,
      isCompleted: false
    })
    this.setState({
      todoList: newList
    });
  }

  handleTodoItemClick = (item, idx) => {
    const newTodoList = this.state.todoList.slice();
    newTodoList[idx].isCompleted = !newTodoList[idx].isCompleted;
    this.setState({
      todoList: newTodoList
    });
  }

  handleFilterCompletedClick = () => {
    this.setState({
      filterCompleted: !this.state.filterCompleted
    });
  }

  render() {
    const{dispatch}=this.props;
    const list = this.state.filterCompleted
      ? this.getFilterList(this.state.todoList)
      : this.state.list;
    return (
      <provider store={store}>
      <div className="todo-ctn">
        <AddTodo onAddTodo={this.handleAddTodo} />
        <TodoList list={list} dispatch={dispatch}onTodoItemClick={this.handleTodoItemClick} />
        <Filter
          filterCompleted={this.state.filterCompleted}
          onFilterCompletedClick={this.handleFilterCompletedClick}
        />
      </div>
      </provider>
    );
  }
}
//function mapStoreTo
