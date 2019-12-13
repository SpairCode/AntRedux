import React from 'react';
import { Row, Col } from 'antd';
import styles from './Header.less';

class Header extends React.Component {
  render () {
    return (
      <div className={styles.header}>
        <Row>
          <Col span={3}> Fan </Col>
          <Col span={3}></Col>
          <Col span={6}></Col>
          <Col span={6}></Col>
          <Col span={6}></Col>
        </Row>
      </div>
    )
  }
}

export default Header