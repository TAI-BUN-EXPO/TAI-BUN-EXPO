import React from 'react';
import logo from './too/LOGO_NO_BG.png';
import TshingTuann from './TshingTuann'
import SiKanPio from './SiKanPio'
import BePhio from './BePhio'
import './App.css';

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
        <h2 className="ui massive si-ki header">
          
        </h2>
      </header>

      <div className="ui container">
        <TshingTuann/> 
        <SiKanPio/>
        <BePhio/>

      <div className="ui text center aligned container App-buy">
        <div className="ui inverted divider"></div>
        <a
          className="ui icon"
          href="https://www.facebook.com/pg/taibunexpo/events/?ref=page_internal"
          target="_blank" 
          rel="noopener noreferrer" 
        >
          <i className="ui facebook icon"/> 台文博覽會 Facebook
        </a>
      </div>
      </div>
    </div>
  );
}

export default App;
