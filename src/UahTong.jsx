import React from 'react'
import './UahTong.css'

const Too = ({tongmia}) => {
return(
	<div className="App-tsiatbok">
		<a href="https://google.com" className="ui image">
			<img src={tongmia} alt=''/>
		</a>
	</div>
)}

const UahTong = ({sikan, hangbok}) => (
	<div className="App-tsoo">
        <h1 className="ui inverted center aligned header">{sikan}</h1>
        <div>
            {hangbok.map(too => <Too key={too} tongmia={too}/>)}
        </div>
    </div>
)

export default UahTong