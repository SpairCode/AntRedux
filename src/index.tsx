import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import Todolist from '../src/component/common/TodoList/TodoList'

ReactDOM.render(<Todolist />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
