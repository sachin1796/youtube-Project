import React, { useEffect,useState } from 'react'
import {youtube_api_url} from '../utils/constant';
import VideoCard from './VideoCard';
import {Link} from 'react-router-dom';

const VideoContainer = () => {

  const[videos,setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  },[]);

  const getVideos = async () => {
    const data = await fetch(youtube_api_url);
    const json = await data.json();
    setVideos(json.items);
    
  }
 
  return (
    <div className='flex flex-wrap justify-evenly'>
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video}/>
        </Link>
        ))} 
    </div>
  )
}

export default VideoContainer