import React from 'react';
import { Row, Col, Icon } from 'antd';
import styles from './Footer.less';

class Footer extends React.Component {
  render () {
    return (
      <div className={styles.footer}>
        <div className={styles.contentBox}>
          <Row className={styles.leftLogo}>
            <Col span={12}>
              <div className={styles.leftTips}>
                <div className={`${styles.logo} animated fadeInLeftBig`}></div>
                <p>It was a humorously perilous business for both of us. For, before we proceed further.</p>
              </div>
            </Col>
            <Col span={12}>
              <div className={styles.list}>
                <ul>
                  <li>
                    <p> How It Works </p>
                    <ul>
                      <li>How To Join Us</li>
                      <li>How It Works</li>
                      <li>Integrations & API</li>
                      <li>iOS & Android Apps</li>
                    </ul>
                  </li>
                  <li>
                    <p> Company </p>
                    <ul>
                      <li>About</li>
                      <li>Customers</li>
                      <li>Careers</li>
                      <li>Contact</li>
                    </ul>
                  </li>
                  <li>
                    <p> Support </p>
                    <ul>
                      <li>Guidelines</li>
                      <li>Community</li>
                      <li>Documents</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles.bottomBox}>
          <Row className={styles.bottomRow}>
            <Col span={8}>
              <span> © 2019 Fantasty </span>
            </Col>
            <Col className={styles.tips} span={8}>
              <span> FAQ </span>
              <span> PRIVACY </span>
              <span> TREMS </span>
            </Col>
            <Col span={8}>
              <Icon className={styles.iconSize} type="github" />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Footer