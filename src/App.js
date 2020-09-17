import React from 'react';
import './App.css';
import Layout from './components/Layout';
import PersonWidget from './components/profile/PersonWidget';

function App() {
  return (
    <div className="App">
      <Layout>
        <PersonWidget />
      </Layout>
    </div>
  );
}

export default App;
