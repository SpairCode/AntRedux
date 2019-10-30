import React from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button type="danger"> This is AntD Buttons </Button>
      </header>
    </div>
  );
}

export default App;
