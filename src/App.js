import React from 'react';
import logo from './too/LOGO_NO_BG.png';
import { tshingtuann } from './tshingtuann'
import UahTong from './UahTong'
import SiKanPio from './SiKanPio';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="ui big image App-logo" alt="logo" />
        <h1 className="ui red inverted header">
          2019/11/01 - 11/30
          <div className="sub header">全台語。講座。行踏。表演。市仔</div>
        </h1>
      </header>

      {/*<!--uah-tong-->*/}
      {
        tshingtuann.map(lepai => 
          <UahTong 
            key={lepai.sikan}
            sikan={lepai.sikan}
            hangbok={lepai.hangbok}
          />
        )
      }
      <div className="App-tsoo">
        <SiKanPio/>
      </div>
    </div>
  );
}

export default App;
