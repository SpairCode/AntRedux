import React from 'react';
import { Row, Col } from 'antd';
import styles from './Header.less';

class Header extends React.Component {
  render () {
    return (
      <div className={styles.header}>
        <Row>
          <Col className={styles.headerLogo} span={3}> Fan </Col>
          <Col span={3}></Col>
          <Col span={6}></Col>
          <Col span={6}></Col>
          <Col span={3}></Col>
          <Col className={styles.headerLogin} span={3}>
            <span> Login </span>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header