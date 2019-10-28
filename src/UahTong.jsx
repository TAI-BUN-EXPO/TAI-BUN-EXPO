import React from 'react'


const Too = ({tiunn}) => {
return(
	<div>
	<a href={tiunn.bangtsi} className="ui medium tsiatbok image">
		<img src={tiunn.too} alt=''/>
	</a>
	</div>
)}

const UahTong = ({sikan, hangbok}) => (
	<div className="App-tsoo">
        <h1 className="ui inverted center aligned header">{sikan}</h1>
        <div className="App-flex-box">
            {hangbok.map(tiunn => <Too key={tiunn.too} tiunn={tiunn}/>)}
        </div>
    </div>
)

export default UahTong