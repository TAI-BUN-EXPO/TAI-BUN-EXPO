import React from 'react'


const Too = ({tongmia}) => {
return(
	<a href="https://google.com" className="ui medium image">
		<img src={tongmia}/>
	</a>
)}

const UahTong = ({sikan, hangbok}) => (
	<div className="App-tsoo">
        <h1 className="ui center aligned header">sikan</h1>
        <div className="App-flex-box">
            {hangbok.map(too => <Too key={too} tongmia={too}/>)}
        </div>
    </div>
)

export default UahTong