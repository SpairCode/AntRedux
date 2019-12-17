import React from 'react';
import styles from './List.less';

class List extends React.Component {
  render () {
    return (
      <div className={styles.Box}>
        <div className={`${styles.listBox} animated fadeInDown `}>
          <div className={styles.list}></div>
          <div className={styles.list}></div>
          <div className={styles.list}></div>
        </div>
      </div>
    )
  }
}

export default List