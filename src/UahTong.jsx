import React from 'react'
import ProgressiveImage from 'react-progressive-image'
import fbicon from './too/facebook-icon.png'
import './UahTong.css'

const Too = ({tiunn}) => {
return(
	<div className="App-tsiatbok">
	    <a href={tiunn.bangtsi} className="ui tsiatbok image">
		    {/*<img src={tiunn.too} alt=''/>*/}
		    <ProgressiveImage
		    	src={tiunn.too} 
		    	placeholder={fbicon}>
			  {src => <img src={src} alt="an quick preview" />}
			</ProgressiveImage>
	    </a>
	</div>
)}

const UahTong = ({sikan, hangbok}) => (
	<div className="App-tsoo">
        <h1 className="ui inverted center aligned header">{sikan}</h1>
        <div>
            {hangbok.map(tiunn => <Too key={tiunn.too} tiunn={tiunn}/>)}
        </div>
    </div>
)

export default UahTong