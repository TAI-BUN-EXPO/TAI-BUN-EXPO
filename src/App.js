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
      </header>

    <h1 className="ui massive ji-kio header">
      2019/11/01 - 11/30
      <div className="sub header">
        --------------------------------------------------
      </div>
    </h1>

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
      
      
      <SiKanPio/>
      
      <div className="ui text container App-buy">
        <a
          className="ui massive inverted button"
          href="https://www.facebook.com/pg/taibunexpo/events/?ref=page_internal"
          target="_blank" 
          rel="noopener" 
        >
          來去買票！</a>
      </div>
    </div>
  );
}

export default App;
