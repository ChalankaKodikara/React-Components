import React from 'react'

import Slider2 from '../Slider/Slider2.js'
import './Page.css'
import Card from '../components/card/Card.js'
import Card02 from '../components/card/Card02.js'


function page() {
  return (
    <div className='Container'>
      <div >
       <Slider2/>
<Card/>
      </div>

      <Card02/>
    </div>
  )
}

export default page
