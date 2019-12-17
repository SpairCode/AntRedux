import React from 'react';
import { Row, Col } from 'antd';
import styles from './Header.less';
import NProgress from 'nprogress';

class Header extends React.Component {

  state = {
    scrollValue: 0
  }

  getScrollTop = (e) => {
    this.setState({
      scrollValue: e.srcElement.documentElement.scrollTop
    })
  }

  componentDidMount () {
    NProgress.start()
    NProgress.set(1.0)
    window.addEventListener('scroll', (e) => {
      this.scrollActive = false
      if (!this.scrollActive) {
        window.requestAnimationFrame(() => {
          this.getScrollTop(e)
        })
        this.scrollActive = true
      }
    })
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.getScrollTop)
  }

  render () {
    const { scrollValue } = this.state
    return (
      <div className={`${styles.header} ${`${scrollValue}` >= 80 ? `${styles.light}` : `${styles.dark}`}`}>
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