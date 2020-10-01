import React from 'react';
import './App.css';
import Layout from './components/Layout';
import Menu from './components/menu';
import LeftSide from './components/LeftSide';

function App() {
  return (
    <div className="App">
      <Layout>
        <Menu />
        <LeftSide />
      </Layout>
    </div>
  );
}

export default App;
