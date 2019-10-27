import React from 'react';
import logo from './too/LOGO_NO_BG.png';
import react_logo from './logo.svg';
import khuiboo from './too/20191101 1930 開幕陳奕齊.png';
import iamtiannpoo from './too/20191102 1430 來去鹽埕埔大溝頂行踏.png';
import tianiann from './too/20191102 2000 大俠梅花鹿.png';
import kooi from './too/20191103 1500 古意唸歌團.png';
import SiKanPio from './SiKanPio';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="ui big image App-logo" alt="logo" />
        <h1 className="ui red inverted header">
          2019/11/01 - 11/30
          <div class="sub header">全台語。講座。行踏。表演。市仔</div>
        </h1>
      </header>

      {/*<!--uah-tong-->*/}
      <div className="App-tsoo">

        <h1 className="ui center aligned header">11.2 Fri. - 11.4 Sun.</h1>
        <div className="App-flex-box">
            <a href="https://google.com" className="ui medium image">
                <img src={khuiboo}/>
            </a>
            <a href="https://google.com" className="ui medium image">
              <img src={iamtiannpoo}/>
            </a>
        </div>
         <div className="App-flex-box">
            <a href="https://google.com" className="ui medium image">
                <img src={tianiann}/>
            </a>
            <a href="https://google.com" className="ui medium image">
              <img src={kooi}/>
            </a>
        </div>
      </div>

      <div className="App-tsoo">
        <SiKanPio/>
      </div>
    </div>
  );
}

export default App;
