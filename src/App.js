import React from 'react';
import logo from './too/LOGO_NO_BG.png';
import TshingTuann from './TshingTuann'
import SiKanPio from './SiKanPio'
import BePhio from './BePhio'
import './App.css';
import fbicon from './too/facebook-icon.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1 className="ui massive header">
          TÂI-BÛN EXPO
          <div className="ui sub header">
            2019.11.01&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;11.30</div>
        </h1>
      </header>

      <div className="ui container">
        <TshingTuann/> 
        <SiKanPio/>
        <BePhio/>

      <div className="ui text center aligned container App-buy">
        <a
          href="https://www.facebook.com/pg/taibunexpo/events/?ref=page_internal"
          target="_blank" 
          rel="noopener noreferrer" 
        >
          <img src={fbicon} className="fb-icon" alt='FB' /> 台文博覽會 Facebook
        </a>
      </div>
      </div>
    </div>
  );
}

export default App;
