import React from 'react';
import { Input, List, Button, Row, Col } from 'antd';

class ToDoListUI extends React.Component {
  render () {
    const { inputValue, list, value }  = this.props
    return (
        <div style={{ padding: 10 }}>
        <div>
          <Input onChange={ this.props.changeInputValue } style={{ width: 250, margin: '0px 10px 0px 0px' }} value={ value } placeholder={ inputValue } />
          <Button onClick={ this.props.addItem } type="primary"> Add </Button>
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
                    <Button onClick={ () => {this.props.deleteItem(index)}} type="danger"> Delete </Button>
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

export default ToDoListUI