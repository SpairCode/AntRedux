import React from 'react';
import { Button } from 'antd';
import { createStore } from 'redux';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import counter from './redux/reducers';

const store = createStore(counter)

class App extends React.Component {

  state = {
    number: 0,
    val: 0,
  }

  unsubscribe = () => {
    store.subscribe(() => {
      console.log('unsubscribe', store.getState())
      this.setState({
        number: store.getState()
      })
    })
  }

  componentDidMount () {
    this.unsubscribe()

    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 1 次输出  没有立即更新state

    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 2 次输出  合并之前的state值  val: 1

    setTimeout(() => {
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 3 次输出

      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 4 次输出
    }, 0);

  }

  // 提供 getState() 方法获取 state；
  // 提供 dispatch(action) 方法更新 state；
  // 通过 subscribe(listener) 注册监听器;
  // 通过 subscribe(listener) 返回的函数注销监听器。

  render () { 
    const { number } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="text-style">{ number }</h1>
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
