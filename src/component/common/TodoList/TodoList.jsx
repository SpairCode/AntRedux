import React from 'react';
// import { Input, List, Button, Row, Col } from 'antd';
import store from '../../../redux/store/store';
// import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM } from '../../../redux/actions/actionTypes'
import { changInputAction, addItemAction, deleteItemAction } from '../../../redux/actions/actionCreatores'
import TodoListUI from './ToDoListUI'

class TodoList extends React.Component {

  constructor (props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.storeChange) //订阅Redux的状态
  }

  storeChange = () => {
    this.setState(store.getState())
  }

  changeInputValue = (e) => {
    const action = changInputAction(e.target.value)
    store.dispatch(action)
  }

  addItem = () => {
    const action = addItemAction()
    store.dispatch(action)
  }

  deleteItem = (index) => {
    const action = deleteItemAction(index)
    store.dispatch(action)
  }

  render () {
    const { inputValue, list, value }  = this.state
    return (
      <TodoListUI 
        inputValue={inputValue}
        value={value}
        list={list}
        changeInputValue={this.changeInputValue}
        addItem={this.addItem}
        deleteItem={this.deleteItem}
      />
    )
  }
}

export default TodoList