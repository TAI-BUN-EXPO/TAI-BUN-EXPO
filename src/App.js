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
        <img src={logo} className="App-logo" alt="logo" />

        <h1 className="ui massive header">
          台文博覽會
          <div className="ui sub header">Tâi-bûn Expo</div>
        </h1>
        <h2 className="ui massive si-ki header">
          2019/11/01 - 11/30
        </h2>
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

      
      <div className="ui text center aligned container App-buy">
        <div className="ui inverted divider"></div>
        <a
          className="ui icon"
          href="https://www.facebook.com/pg/taibunexpo/events/?ref=page_internal"
          target="_blank" 
          rel="noopener" 
        >
          <i className="ui facebook icon"/> 台文博覽會 Facebook
        </a>
      </div>
    </div>
  );
}

export default App;
