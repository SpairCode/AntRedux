import React from 'react';
import { Input, List, Button, Row, Col } from 'antd';
import store from '../../../redux/store/store';

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
    console.log('e', e.target.value)
    const action = {
      type: 'changeInput',
      value: e.target.value
    }
    store.dispatch(action)
  }

  addItem = () => {
    const action = {
      type: 'addItem',
      value: this.state.value
    }
    store.dispatch(action)
  }

  deleteItem = (index) => {
    const action = {
      type: 'deleteItem',
      value: index
    }
    store.dispatch(action)
  }

  render () {
    const { inputValue, list, value }  = this.state
    return (
      <div style={{ padding: 10 }}>
        <div>
          <Input onChange={ this.changeInputValue.bind() } style={{ width: 250, margin: '0px 10px 0px 0px' }} value={ value } placeholder={ inputValue } />
          <Button onClick={ this.addItem.bind() } type="primary"> Add </Button>
        </div>
        <div style={{ margin: '10px 0px' }}>
          <List
            header={<div> Working List Item </div>}
            bordered
            dataSource={list}
            renderItem={(item, index) => (
              <List.Item>
                <Row style={{ width: '100%' }}>
                  <Col span={18} >
                    { item }
                  </Col>
                  <Col span={6} >
                    <Button onClick={ this.deleteItem.bind(this, index) } type="danger"> Delete </Button>
                  </Col>
                </Row>
              </List.Item>
            )}
          />
        </div>
      </div>
    )
  }
}

export default TodoList