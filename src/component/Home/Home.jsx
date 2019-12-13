import React from 'react';
import Header from '../common/Header/Header';
import Banner from '../Banner/Banner';

class Home extends React.Component {
  render () {
    return (
      <div>
        {/* 头部 */}
        <Header/>
        <Banner/>
      </div>
    )
  }
}

export default Home