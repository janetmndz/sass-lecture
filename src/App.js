import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Main />
    </div>
  )
}

export default App;
