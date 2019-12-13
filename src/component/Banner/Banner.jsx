import React from 'react';
import { Row, Col } from 'antd';
import styles from './Banner.less';

class Banner extends React.Component {
  render () {
    return (
      <div className={styles.bannerBox}>
        <Row>
          <Col span={12}>left</Col>
          <Col span={12}>right</Col>
        </Row>
      </div>
    )
  }
}

export default Banner