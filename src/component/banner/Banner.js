import React, { useEffect, useState } from 'react'
import {APIKEY,imageUrl} from '../../constants/constants'
import axios from '../axios.js'
import './Banner.css'
function Banner() {
 const [movie,setMovie] = useState()
useEffect(() =>{
  axios.get(`trending/all/week?api_key=${APIKEY}&language=en-US`).then((response)=>{
    setMovie(response.data.results[6])
  })
},[])
  return (
<div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}>
    <div className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title :" "}</h1>
        <div className='banner_button'>
          <button className='button'>play</button>
          <button className='button'>my list</button>

        </div>
        <h1 className='discription'>{movie ? movie.overview :" "} </h1>
      </div>
      <div className="fade">
        
      </div>
    </div>
    </div>
  )
}

export default Banner