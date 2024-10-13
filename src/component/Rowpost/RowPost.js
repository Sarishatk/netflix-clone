import React,{useEffect,useState} from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import axios from '../axios.js'
import {imageUrl,APIKEY} from '../../constants/constants'

function RowPost(props) {
  const [movies,setMovies] = useState([])
  const [urlid,setUrlid]=useState("")
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      // alert('network error')
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMovie = (id)=>{
console.log(id);
axios.get(`/movie/${id}/videos?api_key=${APIKEY}&language=en-US`).then(response=>{
  if(response.data.results.length!==0){
    setUrlid(response.data.results[0])
  }else{
    console.log("array empty");
    
  }
  
})
  }
  return (
  
    <div className='row'> 
        <h2>{props.title}</h2>
   <div className='posters'>
    {movies.map((obj)=>
         <img onClick={()=>handleMovie(obj.id)} className={props.isSmall? 'smallposter': 'post'} src={`${imageUrl+obj.backdrop_path}`} />

    )}
      
   </div>
   { urlid && <YouTube opts={opts} videoId={urlid.key}/>}
    </div>
  )
}

export default RowPost