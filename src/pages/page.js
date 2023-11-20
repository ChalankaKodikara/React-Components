import React from 'react'
import About from '../Slider/About.js'
import Slider2 from '../Slider/Slider2.js'
import './Page.css'

function page() {
  return (
    <div className='Container'>
      <div >
       <Slider2/>

      <About/>
      </div>
    </div>
  )
}

export default page
