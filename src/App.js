import React from 'react';
import './App.css';
import Layout from './components/Layout';
import Menu from './components/menu';

function App() {
  return (
    <div className="App">
      <Layout>
        <Menu/>
      </Layout>
    </div>
  );
}

export default App;
