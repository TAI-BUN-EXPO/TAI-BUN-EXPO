import React from 'react'


const Too = ({tongmia}) => {
return(
	<div>
	<a href="https://google.com" className="ui medium tsiatbok image">
		<img src={tongmia} alt=''/>
	</a>
	</div>
)}

const UahTong = ({sikan, hangbok}) => (
	<div className="App-tsoo">
        <h1 className="ui inverted center aligned header">{sikan}</h1>
        <div className="App-flex-box">
            {hangbok.map(too => <Too key={too} tongmia={too}/>)}
        </div>
    </div>
)

export default UahTong