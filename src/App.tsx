import React from 'react';
import { Button } from 'antd';
import { createStore } from 'redux';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import counter from './redux/reducers';

const store = createStore(counter)

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="text-style">{ store.getState() }</h1>
          <div>
            <Button onClick={ () => store.dispatch({ type: 'ADD' }) } style={{ margin: 10 }} type='primary' size='large'>Add</Button>
            <Button onClick={ () => store.dispatch({ type: 'CUT' }) } style={{ margin: 10 }} type='danger' size='large'>Cut</Button>
          </div>
        </header>
      </div>
    )
  }
}

export default App;
