import React from 'react'
import {
  BIANHUI_POMIA, 
  THOPHIO,
  THOPHIO_BELIAU,
  BIANHUI_JIPTIUNN,
  SIUHUI_POMIA
} from './SiKanHangBok'

const TsongThai = ({tsongthai}) => (
  <ul class="tsongthai">
  {
    tsongthai.includes(BIANHUI_POMIA) ? 
      <li className="circular yellow">{BIANHUI_POMIA}</li> : null
  }
  {
    tsongthai.includes(THOPHIO) ? 
      <li className="circular lightblue">{THOPHIO}</li> : null
  }
  {
    tsongthai.includes(THOPHIO_BELIAU) ? 
      <li className="circular pink">{THOPHIO_BELIAU}</li> : null
  }
  {
    tsongthai.includes(BIANHUI_JIPTIUNN) ? 
      <li className="circular purple">{BIANHUI_JIPTIUNN}</li> : null
  }
  {
    tsongthai.includes(SIUHUI_POMIA) ? 
      <li className="circular waterblue">{SIUHUI_POMIA}</li> : null
  }
  </ul>
)

export default TsongThai
