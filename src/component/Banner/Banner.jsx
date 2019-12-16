import React from 'react';
import { Row, Col } from 'antd';
import styles from './Banner.less';

class Banner extends React.Component {
  render () {
    return (
      <div className={styles.bannerBox}>
        <Row>
          <Col span={12}>
            <div className={`${styles.leftTextBox} animated fadeInLeft `}>
              <h1>How Does An Lcd Screen Work</h1>
              <span></span>
              <p>5 Reasons To Choose A Notebook Over A Computer <br/> Desktop</p>
            </div>
          </Col>
          <Col span={12}>
            {/* 图片 */}
            <div className={`${styles.imgBox} animated fadeInRight `}>
              <div className={styles.img}></div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Banner