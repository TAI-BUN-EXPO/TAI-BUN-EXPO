import React from 'react'
import SiKanHangBok from './SiKanHangBok'
import TsongThai from './TsongThai'
import './SiKanPio.css'

const lueiong = SiKanHangBok.map((kang,i) =>
  <div key={i}>
    <span className='jit'>{kang.jit}</span><br/>
	{kang.hangbok.map(tiunn =>
      <div key={tiunn.sikan}>
        <span className='sikan'>{tiunn.sikan}</span><br/>
        <span className='tebok'>{tiunn.tebok}</span><br/>
        <div className="flex-row">
          <span className='sootsai'>{tiunn.sootsai}</span>
          <TsongThai tsongthai={tiunn.suehbing}/>
        </div>
      </div>
	)}
  </div>
)

const SiKanPio = () => (
  <div className='sikanpio ui text container'>
    <h1 className="ui inverted center aligned header">時間表</h1>
    {lueiong}
  </div>
)

export default SiKanPio
