import React from 'react';
import { Row, Col } from 'antd';
import styles from './Header.less';

class Header extends React.Component {

  getTopHeight = (e) => {
    console.log('e', e)
  }

  render () {
    return (
      <div className={styles.header} onScroll={ (e)=> this.getTopHeight(e)}>
        <Row>
          <Col className={styles.headerLogo} span={3}> FN </Col>
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