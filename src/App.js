import React from 'react';
import logo from './too/LOGO_NO_BG.579x584.png';
import TshingTuann from './TshingTuann'
import SiKanPio from './SiKanPio'
import BePhio from './BePhio'
import './App.css';
import fbicon from './too/facebook-icon.png'

function App() {
  return (
    <article className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1 className="ui massive header">
          TÂI-BÛN EXPO
        </h1>
        <h2 className="ui medium inverted header">
          2019.11 tī 打狗
        </h2>
      </header>

      <main className="ui container">
        <TshingTuann/> 
        <SiKanPio/>
        <BePhio/>
      </main>

      <footer className="ui text center aligned container">
        <a
          href="https://www.facebook.com/pg/taibunexpo/events/?ref=page_internal"
          target="_blank" 
          rel="noopener noreferrer" 
        >
          <img src={fbicon} className="fb-icon" alt='FB' />
          <span>台文博覽會 Facebook</span>
        </a>
      </footer>
    </article>
  );
}

export default App;
