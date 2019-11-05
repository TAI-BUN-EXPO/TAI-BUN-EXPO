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
		    	delay={1500}
		    	src={tiunn.too} 
		    	placeholder={tiunn.hasOwnProperty('bi')? tiunn.bi: fbicon}>
			  {src => <img src={src} alt="an quick preview" />}
			</ProgressiveImage>
	    </a>
	</div>
)}

const UahTong = ({sikan, hangbok, si_tngki}) => (
	<div className="App-tsoo">
        <h1 className={
        	'ui inverted center aligned header ' +
        	(si_tngki ? 'ji-ng' : null)
    	}
    	>{sikan}</h1>
        <div>
            {hangbok.map(tiunn => <Too key={tiunn.too} tiunn={tiunn}/>)}
        </div>
    </div>
)

export default UahTong