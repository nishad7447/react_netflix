import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import { imgUrl ,API_KEY} from '../../constants/constants'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [ytid,setYtid]=useState('')
    useEffect(()=>{
        axios.get(props.url).then(response=>{
            setMovies(response.data.results)
            })
    },[])
        const opts={
            height:'390',
            width:'100%',
            playerVars:{
                autoplay:0,
            }
        }
        const handleMovieTriler=(id)=>{
            axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
                if(response.data.results.length!==0){
                    setYtid(response.data.results[0])
                }else{
                    console.log('no triller');
                }
            })
        }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
{
    movies.map((obj)=>
    <img onClick={()=>handleMovieTriler(obj.id)} className={props.isSamll ? 'smallPoster' : 'poster'} src={`${imgUrl+obj.backdrop_path}`} alt="" />
    )
}
        </div>
        {
            ytid && <Youtube opts={opts} videoId={ytid.key} />
        }
        
    </div>
  )
}

export default RowPost