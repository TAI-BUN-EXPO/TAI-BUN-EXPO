import React from 'react'

const sikan=[
  {
    jit: '2019.11.01 拜五',
    hangbok: [
    	{
    		sikan: '19:30-21:30', 
    		tebok: '【開幕講座】用台語論政 陳奕齊', 
    		sootsai: '三餘書店',
    		sibianhui: true
    	}
    ]
  },{
  	jit: '2019.11.02 拜六',
  	hangbok: [
  		{
    		sikan: '14:30-16:30', 
    		tebok: '【行踏 鹽埕埔大溝頂】打狗台語開講社', 
    		sootsai: '鹽埕埔大溝頂',
    		sibianhui: false
    	},{
    		sikan: '20:00-22:00', 
    		tebok: '【烏白來大khiang片】大俠梅花鹿', 
    		sootsai: '灰咖啡',
    		sibianhui: false
    	}
  	]
  },{
  	jit: '2019.11.03 禮拜',
  	hangbok: [
  		{
    		sikan: '15:00-16:00', 
    		tebok: '【門口埕聽啥物歌】古意唸歌團', 
    		sootsai: 'MLD台鋁門口埕',
    		sibianhui: true
    	}
  	]
  },{
  	jit: '2019.11.09 拜六',
  	hangbok: [
  		{
    		sikan: '14:30-16:30', 
    		tebok: '【講座 說唱PK】台南妹仔+周定邦', 
    		sootsai: '灰咖啡',
    		sibianhui: false
    	}
  	]
  },{
  	jit: '2019.11.10 禮拜',
  	hangbok: [
  		{
    		sikan: '09:00-12:00', 
    		tebok: '【行踏 旗津】台南妹仔+周定邦', 
    		sootsai: '灰咖啡',
    		sibianhui: false
    	}
  	]
  }

]

const a=sikan.map((jit,uahtong)=><div>{jit},,{uahtong}</div>)
const SiKanPio = () => (
  <div>
    {a}
  </div>
)

export default SiKanPio