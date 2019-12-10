import React from 'react';
import { Input, List, Button } from 'antd';
import store from '../../../redux/store/store';

class TodoList extends React.Component {

  constructor (props) {
    super(props)
    this.state = store.getState()
  }

  changeInputValue = (e) => {
    console.log(e.target.value)
    const action = {
      type: 'changeInput',
      value: e.target.value
    }
    store.dispatch(action)
    // store.subscribe()
  }

  render () {
    const { inputValue, list }  = this.state
    return (
      <div>
        <div>
          <Input onChange={ this.changeInputValue.bind() } style={{ width: 250, margin: '0px 10px 0px 0px' }} placeholder={ inputValue } />
          <Button type="primary"> Add </Button>
        </div>
        <div style={{ margin: '10px 0px' }}>
          <List
            header={<div> Working List Item </div>}
            bordered
            dataSource={list}
            renderItem={item => (
              <List.Item> {item} </List.Item>
            )}
          />
        </div>
      </div>
    )
  }
}

export default TodoList