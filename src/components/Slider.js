import React, { useState } from 'react'
import { Image } from './DataSlider'
import "./slider.css"
function Slider() {
    const [data,setdata]=useState(Image)
    const [counts,setcount]=useState(2)

    const Next=()=>{
        if (counts<data.length-1) {
            setcount(counts+ +1)
        }
    }
    
    const prev=()=>{
        if (counts>0) {
            setcount(counts-1)
        }
    }
  return (
    <div>
        
       <center>
       <div className='col-lg-8 col-sm-4 mt-5'>
        <span className='row '>
        <button className='btn info next' onClick={Next}>
            <i class="fa-solid fa-arrow-left "></i>
        </button>
        <img src={data[counts].img} className='image col-5' alt="" />
        <button className='btn info  prev' onClick={prev}>
            <i class="fa-solid fa-arrow-right "></i>
        </button>
        </span>
        </div>
       
       </center>
     
    </div>
  )
}
export default Slider
