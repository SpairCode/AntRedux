import React from 'react';
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';
import Banner from '../Banner/Banner';
import List from '../List/List';
import LazyLoad from 'react-lazyload';
// import Media from 'react-media';

class Home extends React.Component {

  render () {
    return (
      <div>
        {/* 头部 */}
        <Header/>
        <Banner/>
        <LazyLoad offset={50}>
          <List/>
        </LazyLoad>
        <LazyLoad offset={50}>
          <Footer/>
        </LazyLoad>
      </div>
    )
  }
}

export default Home