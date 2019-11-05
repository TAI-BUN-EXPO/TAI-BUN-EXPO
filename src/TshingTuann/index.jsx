import React from 'react'
import { tshingtuann } from './tshingtuann'
import UahTong from '../UahTong'

const TshingTuann = () => (
	<div>
	{
	  tshingtuann.map(lepai => 
	    <UahTong 
	      key={lepai.sikan}
	      sikan={lepai.sikan}
	      hangbok={lepai.hangbok}
	      si_tngki={lepai.hasOwnProperty('si_tngki')}
	    />
	  )
	}
	</div>
)

export default TshingTuann